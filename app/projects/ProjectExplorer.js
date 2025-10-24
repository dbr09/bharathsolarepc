"use client";

import { useMemo, useState } from "react";

const formatCapacity = (kw) => {
  if (!Number.isFinite(kw)) {
    return "—";
  }

  if (kw >= 1000) {
    return `${(kw / 1000).toFixed(1)} MW`;
  }

  return `${Math.round(kw).toLocaleString()} kW`;
};

const formatYearRange = (start, end) => {
  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    return "—";
  }

  if (start === end) {
    return `${start}`;
  }

  return `${start} – ${end}`;
};

const baseButtonClasses =
  "rounded-full border px-4 py-2 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export default function ProjectExplorer({ projects }) {
  const yearBounds = useMemo(() => {
    if (!projects.length) {
      const fallback = new Date().getFullYear();
      return { min: fallback, max: fallback };
    }

    return projects.reduce(
      (acc, project) => ({
        min: Math.min(acc.min, project.yearStart ?? acc.min),
        max: Math.max(acc.max, project.yearEnd ?? acc.max),
      }),
      { min: Infinity, max: -Infinity },
    );
  }, [projects]);

  const uniqueSectors = useMemo(
    () => Array.from(new Set(projects.map((project) => project.sector))).sort(),
    [projects],
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");
  const [sortKey, setSortKey] = useState("recent");
  const [view, setView] = useState("grid");
  const [fromYear, setFromYear] = useState(yearBounds.min);
  const [toYear, setToYear] = useState(yearBounds.max);

  const hasActiveFilters =
    searchTerm.trim().length > 0 ||
    selectedSector !== "all" ||
    fromYear !== yearBounds.min ||
    toYear !== yearBounds.max;

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSector = selectedSector === "all" || project.sector === selectedSector;
      const matchesYear = (project.yearEnd ?? project.yearStart) >= fromYear && project.yearStart <= toYear;
      const searchHaystack = [
        project.client,
        project.location,
        project.sector,
        project.timeline,
        project.capacityLabel,
        ...(project.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = term.length === 0 || searchHaystack.includes(term);

      return matchesSector && matchesYear && matchesSearch;
    });
  }, [projects, searchTerm, selectedSector, fromYear, toYear]);

  const sortedProjects = useMemo(() => {
    const next = [...filteredProjects];

    next.sort((a, b) => {
      const aCapacity = (a.capacityKw ?? 0) * (a.count ?? 1);
      const bCapacity = (b.capacityKw ?? 0) * (b.count ?? 1);
      const aRecent = a.yearEnd ?? a.yearStart ?? 0;
      const bRecent = b.yearEnd ?? b.yearStart ?? 0;

      if (sortKey === "capacity") {
        if (bCapacity === aCapacity) {
          return bRecent - aRecent;
        }
        return bCapacity - aCapacity;
      }

      if (sortKey === "alpha") {
        return a.client.localeCompare(b.client, undefined, { sensitivity: "base" });
      }

      if (sortKey === "oldest") {
        if (aRecent === bRecent) {
          return aCapacity - bCapacity;
        }
        return aRecent - bRecent;
      }

      if (bRecent === aRecent) {
        return bCapacity - aCapacity;
      }

      return bRecent - aRecent;
    });

    return next;
  }, [filteredProjects, sortKey]);

  const totals = useMemo(() => {
    if (!sortedProjects.length) {
      return {
        projects: 0,
        capacityKw: 0,
        span: "—",
      };
    }

    const aggregateCapacity = sortedProjects.reduce(
      (acc, project) => acc + (project.capacityKw ?? 0) * (project.count ?? 1),
      0,
    );
    const spanStart = Math.min(...sortedProjects.map((project) => project.yearStart ?? project.yearEnd));
    const spanEnd = Math.max(...sortedProjects.map((project) => project.yearEnd ?? project.yearStart));

    return {
      projects: sortedProjects.length,
      capacityKw: aggregateCapacity,
      span: formatYearRange(spanStart, spanEnd),
    };
  }, [sortedProjects]);

  const sectorBreakdown = useMemo(() => {
    if (!filteredProjects.length) {
      return [];
    }

    return uniqueSectors
      .map((sector) => {
        const sectorProjects = filteredProjects.filter((project) => project.sector === sector);
        const sectorCapacity = sectorProjects.reduce(
          (acc, project) => acc + (project.capacityKw ?? 0) * (project.count ?? 1),
          0,
        );

        return {
          sector,
          count: sectorProjects.length,
          capacity: sectorCapacity,
        };
      })
      .filter((entry) => entry.count > 0)
      .sort((a, b) => b.capacity - a.capacity);
  }, [filteredProjects, uniqueSectors]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSector("all");
    setSortKey("recent");
    setView("grid");
    setFromYear(yearBounds.min);
    setToYear(yearBounds.max);
  };

  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" aria-hidden />
        <div className="absolute -right-32 top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
      </div>

      <header className="overflow-hidden rounded-4xl border border-white/10 bg-white/6 p-8 shadow-[0_45px_160px_-90px_rgba(56,189,248,0.85)] backdrop-blur-xl sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-300/80">Project Showcase</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-50 sm:text-5xl">
          Our projects, explored dynamically
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200/90">
          Toggle sectors, scrub the timeline, and switch between immersive cards or a performance table to discover how Bharath Solar EPC deploys clean energy across Telangana and beyond.
        </p>
      </header>

      <section className="rounded-4xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
          <label className="lg:col-span-5">
            <span className="text-sm font-medium text-slate-200/90">Search</span>
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              placeholder="Search by client, location or technology"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <label className="lg:col-span-3">
            <span className="text-sm font-medium text-slate-200/90">Sector</span>
            <select
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-base text-slate-100 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              value={selectedSector}
              onChange={(event) => setSelectedSector(event.target.value)}
            >
              <option value="all">All sectors</option>
              {uniqueSectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </label>

          <div className="lg:col-span-4">
            <span className="text-sm font-medium text-slate-200/90">Timeline focus</span>
            <div className="mt-3 grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-400">From</label>
                  <input
                    type="range"
                    min={yearBounds.min}
                    max={yearBounds.max}
                    value={fromYear}
                    onChange={(event) => {
                      const nextValue = Number.parseInt(event.target.value, 10);
                      setFromYear(Math.min(nextValue, toYear));
                    }}
                    className="mt-1 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-emerald-400"
                  />
                  <p className="mt-2 text-sm font-semibold text-emerald-200">{fromYear}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-400">To</label>
                  <input
                    type="range"
                    min={yearBounds.min}
                    max={yearBounds.max}
                    value={toYear}
                    onChange={(event) => {
                      const nextValue = Number.parseInt(event.target.value, 10);
                      setToYear(Math.max(nextValue, fromYear));
                    }}
                    className="mt-1 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-sky-400"
                  />
                  <p className="mt-2 text-sm font-semibold text-sky-200">{toYear}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Viewing projects delivered between {fromYear} and {toYear}. Drag the sliders to focus on a
                narrower period.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-slate-200/90">Sort by</span>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "recent", label: "Most recent" },
                { key: "capacity", label: "Largest capacity" },
                { key: "alpha", label: "A → Z" },
                { key: "oldest", label: "Oldest first" },
              ].map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setSortKey(option.key)}
                  className={`${baseButtonClasses} ${
                    sortKey === option.key
                      ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-200 shadow-[0_10px_40px_-20px_rgba(16,185,129,0.7)]"
                      : "border-white/10 bg-slate-900/30 text-slate-200/80 hover:border-white/20 hover:bg-slate-900/50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-slate-200/90">View</span>
            {[
              { key: "grid", label: "Interactive cards" },
              { key: "table", label: "Performance table" },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setView(option.key)}
                className={`${baseButtonClasses} ${
                  view === option.key
                    ? "border-sky-400/60 bg-sky-400/10 text-sky-200 shadow-[0_10px_40px_-20px_rgba(56,189,248,0.7)]"
                    : "border-white/10 bg-slate-900/30 text-slate-200/80 hover:border-white/20 hover:bg-slate-900/50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters ? (
          <div className="mt-6 flex items-center justify-between rounded-3xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-200">
            <span>
              Showing <strong>{sortedProjects.length}</strong> project{sortedProjects.length === 1 ? "" : "s"}.
            </span>
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/20"
            >
              Reset filters
            </button>
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_-50px_rgba(56,189,248,0.8)]">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-400">Projects in focus</p>
          <p className="mt-3 text-3xl font-semibold text-slate-50">{totals.projects}</p>
          <p className="mt-2 text-sm text-slate-400">
            Dynamic tally of installs that match your filters and sorting.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_-50px_rgba(16,185,129,0.8)]">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-400">Capacity represented</p>
          <p className="mt-3 text-3xl font-semibold text-emerald-200">{formatCapacity(totals.capacityKw)}</p>
          <p className="mt-2 text-sm text-slate-400">Summed kW across the filtered showcase.</p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_-50px_rgba(251,191,36,0.7)]">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-400">Timeline span</p>
          <p className="mt-3 text-3xl font-semibold text-sky-200">{totals.span}</p>
          <p className="mt-2 text-sm text-slate-400">Earliest to latest delivery represented now.</p>
        </article>
      </section>

      {sectorBreakdown.length > 0 ? (
        <section className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <h2 className="text-xl font-semibold text-slate-100">Sector energy mix</h2>
          <p className="mt-2 text-sm text-slate-400">
            See how capacity distributes across the industries in view. The bars animate as you explore.
          </p>
          <div className="mt-6 space-y-4">
            {sectorBreakdown.map((entry) => {
              const share = totals.capacityKw > 0 ? entry.capacity / totals.capacityKw : 0;
              const sharePercent = Math.round(share * 100);

              return (
                <div key={entry.sector} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-200/80">
                    <span className="font-medium text-slate-100">{entry.sector}</span>
                    <span>
                      {formatCapacity(entry.capacity)} · {entry.count} project{entry.count === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900/50">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400/70 via-sky-400/60 to-emerald-300/60 transition-all duration-500"
                      style={{ width: `${Math.max(8, sharePercent)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {sortedProjects.length > 0 ? (
        view === "grid" ? (
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sortedProjects.map((project) => {
              const capacityTotal = formatCapacity((project.capacityKw ?? 0) * (project.count ?? 1));

              return (
                <article
                  key={`${project.client}-${project.capacityLabel}`}
                  className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:border-emerald-400/40 hover:bg-white/[0.08]"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <span>{project.sector}</span>
                    <span>{project.timeline}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-slate-50">{project.client}</h3>
                  <p className="mt-2 text-sm text-slate-200/80">{project.location}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-200/80">
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-400">System size</dt>
                      <dd className="mt-1 text-lg font-semibold text-emerald-200">{project.capacityLabel}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-slate-400">Total delivered</dt>
                      <dd className="mt-1 text-lg font-semibold text-sky-200">{capacityTotal}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-xs uppercase tracking-wide text-slate-400">Highlights</dt>
                      <dd className="mt-1 text-sm text-slate-200/80">
                        {[project.location, project.timeline]
                          .filter(Boolean)
                          .map((value, index) => (
                            <span key={value}>
                              {value}
                              {index < 1 ? " • " : ""}
                            </span>
                          ))}
                      </dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-200">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Sector
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Timeline
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    System size
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Total delivered
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sortedProjects.map((project) => {
                  const capacityTotal = formatCapacity((project.capacityKw ?? 0) * (project.count ?? 1));

                  return (
                    <tr key={`${project.client}-${project.capacityLabel}`} className="odd:bg-white/[0.02] even:bg-slate-950/30">
                      <td className="px-6 py-4 text-base font-medium text-slate-100">{project.client}</td>
                      <td className="px-6 py-4">{project.sector}</td>
                      <td className="px-6 py-4">{project.location}</td>
                      <td className="px-6 py-4">{project.timeline}</td>
                      <td className="px-6 py-4">{project.capacityLabel}</td>
                      <td className="px-6 py-4 font-semibold text-emerald-200">{capacityTotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        )
      ) : (
        <section className="rounded-4xl border border-dashed border-white/20 bg-white/6 p-16 text-center text-slate-200/80">
          <p className="text-lg font-semibold text-slate-100">No projects match those filters yet.</p>
          <p className="mt-2 text-sm">
            Try broadening your search or resetting the controls to see our full portfolio.
          </p>
        </section>
      )}
    </section>
  );
}
