'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { nav, contact } from '@/lib/config'
import { ArrowUpRight } from 'lucide-react'

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  /* ── Mobile menu a11y: Escape close + body scroll lock + focus trap ── */
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        triggerRef.current?.focus()
        return
      }
      // Focus trap — keep tab cycling inside the drawer
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    // Move focus into drawer when opened
    requestAnimationFrame(() => {
      const firstLink = drawerRef.current?.querySelector<HTMLElement>('a[href]')
      firstLink?.focus()
    })

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  /* Close drawer when route changes */
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useGSAP(
    () => {
      /* ── Page-load entrance ── */
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.15,
        clearProps: 'all',
      })

      /* ── Scroll-aware background opacity ── */
      ScrollTrigger.create({
        trigger: '#main',
        start: 'top -60px',
        onEnter:     () => setScrolled(true),
        onLeaveBack: () => setScrolled(false),
      })
    },
    { scope: headerRef },
  )

  return (
    <>
      <header
        ref={headerRef}
        className={[
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass-header'
            : 'bg-canvas border-b border-hairline',
        ].join(' ')}
      >
        <div className="container-site flex h-[80px] items-center justify-between md:h-[96px]">

          {/* Logo — pełen lockup SVG (mark + wordmark) — większe na desktop */}
          <Link href="/" aria-label="Seven Bison — home" className="shrink-0">
            <Image
              src="/images/logos/seven-bison-logo-pink.svg"
              alt="Seven Bison"
              width={220}
              height={64}
              priority
              className="h-12 w-auto md:h-16"
            />
          </Link>

          {/* Primary nav — desktop */}
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'group relative font-body text-body-sm font-medium uppercase tracking-label',
                    'transition-colors duration-micro ease-brand pb-0.5',
                    active
                      ? 'text-pink'
                      : 'text-content-primary hover:text-pink',
                  ].join(' ')}
                >
                  {item.label}
                  {/* Sliding underline — always visible when active, slides in on hover */}
                  <span
                    className={[
                      'absolute bottom-0 left-0 h-px bg-pink',
                      'transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      active ? 'w-full' : 'w-0 group-hover:w-full',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA — desktop */}
          <Link
            href={contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'hidden md:inline-flex items-center gap-1.5',
              'border border-pink px-4 py-2',
              'font-body text-cta tracking-cta text-pink',
              'transition-all duration-micro ease-brand',
              'hover:bg-pink hover:text-content-inverse',
              'active:translate-y-px',
            ].join(' ')}
          >
            Book a call
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            ref={triggerRef}
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className={[
                'block h-px w-6 bg-content-primary transition-all duration-micro',
                mobileOpen ? 'translate-y-[7px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-6 bg-content-primary transition-all duration-micro',
                mobileOpen ? 'opacity-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-6 bg-content-primary transition-all duration-micro',
                mobileOpen ? '-translate-y-[7px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={[
          'fixed inset-0 top-[80px] z-40 bg-canvas md:top-[96px]',
          'flex flex-col overflow-y-auto',
          'transition-all duration-300 ease-brand md:hidden',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none translate-y-2',
        ].join(' ')}
      >
        <nav className="container-site flex flex-col gap-1 py-8">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={[
                  'border-b border-hairline py-4',
                  'font-display text-h3 font-medium',
                  'transition-colors duration-micro',
                  active ? 'text-pink' : 'text-content-primary',
                ].join(' ')}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href={contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-6 border border-pink px-6 py-3 text-center font-body text-cta tracking-cta text-pink"
          >
            Book a call →
          </Link>
        </nav>
      </div>
    </>
  )
}
