interface Anchor {
  label: string
  href: string
}

interface Props {
  anchors: Anchor[]
}

export function SubsectorNav({ anchors }: Props) {
  return (
    <nav
      aria-label="Sub-sectors"
      className="sticky top-[72px] z-30 border-b border-hairline bg-white/70 backdrop-blur-md"
    >
      <div className="container-site">
        <ul className="flex items-center gap-6 overflow-x-auto py-3 scrollbar-none">
          {anchors.map((a) => (
            <li key={a.href} className="shrink-0">
              <a
                href={a.href}
                className="group relative font-body text-body-sm font-medium uppercase tracking-label text-content-muted transition-colors duration-micro hover:text-pink"
              >
                {a.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-pink transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
