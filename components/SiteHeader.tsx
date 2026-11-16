"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  label: string;
  href?: string;
};

const solutionGroups: {
  title: string;
  items: MenuItem[];
}[] = [
  {
    title: "Revenue cycle",
    items: [
      { label: "Revenue Cycle Management", href: "/products/medical-billing/" },
      { label: "Medical Billing Services", href: "/products/medical-billing/" },
      { label: "AR Management & Cash Acceleration" },
      { label: "Denial Management" },
    ],
  },
  {
    title: "Practice operations",
    items: [
      { label: "Front Office Support" },
      { label: "Back Office Support" },
      { label: "Workflow Optimization" },
      { label: "Digital Marketing" },
    ],
  },
  {
    title: "Healthcare technology",
    items: [
      {
        label: "Quality EMR / EHR",
        href: "/products/occupational-therapy-ehr/",
      },
      { label: "Simplify Therapy", href: "/products/simplify-therapy/" },
      { label: "HIPAA Compliance" },
      { label: "MIPS / MICRA" },
    ],
  },
];

const productGroups: {
  title: string;
  items: MenuItem[];
}[] = [
  {
    title: "Genensys products",
    items: [
      {
        label: "Quality EMR / EHR",
        href: "/products/occupational-therapy-ehr/",
      },
      { label: "Teletherapy Services", href: "/products/teletherapy/" },
      { label: "Simplify Therapy", href: "/products/simplify-therapy/" },
      { label: "Patient Care Management", href: "/products/patient-care/" },
      { label: "Medical Billing", href: "/products/medical-billing/" },
    ],
  },
  {
    title: "More products",
    items: [
      { label: "Electronic Prescribing of Controlled Substances" },
      { label: "Practice Management" },
    ],
  },
];

function MenuItemLink({
  item,
  onNavigate,
}: {
  item: MenuItem;
  onNavigate: () => void;
}) {
  const content = (
    <>
      <span>{item.label}</span>
      {!item.href && <span className="nav-item-status">Coming soon</span>}
    </>
  );

  if (!item.href) {
    return (
      <span className="nav-menu-link nav-menu-link-disabled" aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <Link className="nav-menu-link" href={item.href} onClick={onNavigate}>
      {content}
    </Link>
  );
}

function MenuGroups({
  groups,
  onNavigate,
}: {
  groups: { title: string; items: MenuItem[] }[];
  onNavigate: () => void;
}) {
  return (
    <>
      {groups.map((group) => (
        <div className="nav-menu-group" key={group.title}>
          <h2>{group.title}</h2>
          {group.items.map((item) => (
            <MenuItemLink
              item={item}
              key={item.label}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeNavigation() {
    setMenuOpen(false);
    document
      .querySelectorAll<HTMLDetailsElement>("#main-navigation details[open]")
      .forEach((dropdown) => {
        dropdown.open = false;
      });
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Genensys home"
          onClick={closeNavigation}
        >
          <Image
            src="/images/genensys-logo.png"
            alt="Genensys"
            width={54}
            height={54}
            priority
            className="brand-logo"
          />
          <span className="brand-name">GENENSYS</span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link href="/" className="nav-link" onClick={closeNavigation}>
            Home
          </Link>

          <span className="nav-link nav-link-disabled" aria-disabled="true">
            About Us <span className="nav-coming-soon">Coming soon</span>
          </span>

          <Link
            href="/partners/"
            className="nav-link"
            onClick={closeNavigation}
          >
            Partners
          </Link>

          <details className="nav-dropdown nav-dropdown-solutions">
            <summary className="nav-link nav-dropdown-trigger">
              Solutions <span className="nav-dropdown-chevron" aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel nav-dropdown-panel-wide">
              <MenuGroups
                groups={solutionGroups}
                onNavigate={closeNavigation}
              />
            </div>
          </details>

          <details className="nav-dropdown nav-dropdown-products">
            <summary className="nav-link nav-dropdown-trigger">
              Products <span className="nav-dropdown-chevron" aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel nav-dropdown-panel-products">
              <MenuGroups
                groups={productGroups}
                onNavigate={closeNavigation}
              />
              <Link
                className="nav-all-products"
                href="/products/"
                onClick={closeNavigation}
              >
                View all products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </details>

          <span className="nav-link nav-link-disabled" aria-disabled="true">
            Blogs <span className="nav-coming-soon">Coming soon</span>
          </span>

          <Link
            href="/book-a-demo/"
            className="nav-link"
            onClick={closeNavigation}
          >
            Book A Demo
          </Link>

          <Link
            href="/client-login/"
            className="nav-link nav-login"
            onClick={closeNavigation}
          >
            Client Login
          </Link>

          <Link
            href="/book-a-demo/"
            className="header-cta"
            onClick={closeNavigation}
          >
            Make Appointment <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
