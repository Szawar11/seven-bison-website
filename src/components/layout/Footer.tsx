import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Video, CalendarDays, Mail, ArrowUpRight } from 'lucide-react'
import { nav, social, contact, sectors } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-hairline bg-canvas-soft py-14">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" aria-label="Seven Bison — home">
              <Image
                src="/images/logos/seven-bison-logo-pink.svg"
                alt="Seven Bison"
                width={140}
                height={40}
                style={{ height: '40px', width: 'auto' }}
              />
            </Link>
            <p className="mt-4 max-w-xs text-body text-content-muted leading-relaxed">
              Premium video, motion design and animation for B2B brands
              with complex, regulated, or hard-to-photograph subject matter.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seven Bison on LinkedIn"
                className="flex items-center gap-1.5 text-caption text-content-muted transition-colors duration-micro hover:text-pink"
              >
                LinkedIn
                <ExternalLink size={12} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <span className="h-3 w-px bg-hairline" aria-hidden="true" />
              <a
                href={social.vimeo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seven Bison on Vimeo"
                className="flex items-center gap-1.5 text-caption text-content-muted transition-colors duration-micro hover:text-pink"
              >
                <Video size={15} strokeWidth={1.8} aria-hidden="true" />
                Vimeo
              </a>
            </div>
          </div>

          {/* Sectors */}
          <div className="md:col-span-3">
            <p className="eyebrow">Sectors</p>
            <ul className="mt-4 space-y-3">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-body text-content-primary transition-colors duration-micro ease-brand hover:text-pink"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div className="md:col-span-2">
            <p className="eyebrow">Studio</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/studio-access" className="text-body text-content-primary hover:text-pink transition-colors duration-micro">
                  Studio Access
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-body text-content-primary hover:text-pink transition-colors duration-micro">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-body text-content-primary hover:text-pink transition-colors duration-micro">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body text-content-primary hover:text-pink transition-colors duration-micro">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="eyebrow">Talk to us</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-body text-content-primary transition-colors duration-micro hover:text-pink"
                >
                  <CalendarDays size={14} strokeWidth={1.8} aria-hidden="true" />
                  Book a call
                  <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1.5 text-body text-content-primary transition-colors duration-micro hover:text-pink"
                >
                  <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-caption text-content-muted md:flex-row md:items-center">
          <p>© {year} Seven Bison. All rights reserved.</p>
          <p>Gdańsk, Poland — working globally.</p>
        </div>
      </div>
    </footer>
  )
}
