"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MenuItem = {
  label: string;
  href?: string;
};

type DropdownName = "solutions" | "products";

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
      { label: "Interoperability", href: "/interoperability/" },
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
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(
    null,
  );
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRefs = useRef<
    Record<DropdownName, HTMLButtonElement | null>
  >({ solutions: null, products: null });

  function closeNavigation() {
    setMenuOpen(false);
    setActiveDropdown(null);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      const header = headerRef.current;

      if (target instanceof Node && header && !header.contains(target)) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (activeDropdown) {
        setActiveDropdown(null);
        dropdownButtonRefs.current[activeDropdown]?.focus();
        return;
      }

      if (menuOpen) {
        setMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDropdown, menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Genensys home"
          onClick={closeNavigation}
        >
          <Image
            src="/images/genensys-logo.svg"
            alt="Genensys"
            width={64}
            height={36}
            priority
            className="brand-logo"
          />
          <span className="brand-name">GENENSYS</span>
        </Link>

        <button
          ref={mobileMenuButtonRef}
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setActiveDropdown(null);
          }}
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

          <Link href="/about/" className="nav-link" onClick={closeNavigation}>
            About Us
          </Link>

          <div
            className={`nav-dropdown nav-dropdown-solutions ${
              activeDropdown === "solutions" ? "is-open" : ""
            }`}
          >
            <button
              ref={(element) => {
                dropdownButtonRefs.current.solutions = element;
              }}
              type="button"
              className="nav-link nav-dropdown-trigger"
              aria-expanded={activeDropdown === "solutions"}
              aria-controls="solutions-dropdown"
              onClick={() =>
                setActiveDropdown((current) =>
                  current === "solutions" ? null : "solutions",
                )
              }
            >
              Solutions <span className="nav-dropdown-chevron" aria-hidden="true" />
            </button>
            <div
              className="nav-dropdown-panel nav-dropdown-panel-wide"
              id="solutions-dropdown"
              hidden={activeDropdown !== "solutions"}
            >
              <MenuGroups
                groups={solutionGroups}
                onNavigate={closeNavigation}
              />
              <Link
                className="nav-all-solutions"
                href="/solutions/"
                onClick={closeNavigation}
              >
                View all solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div
            className={`nav-dropdown nav-dropdown-products ${
              activeDropdown === "products" ? "is-open" : ""
            }`}
          >
            <button
              ref={(element) => {
                dropdownButtonRefs.current.products = element;
              }}
              type="button"
              className="nav-link nav-dropdown-trigger"
              aria-expanded={activeDropdown === "products"}
              aria-controls="products-dropdown"
              onClick={() =>
                setActiveDropdown((current) =>
                  current === "products" ? null : "products",
                )
              }
            >
              Products <span className="nav-dropdown-chevron" aria-hidden="true" />
            </button>
            <div
              className="nav-dropdown-panel nav-dropdown-panel-products"
              id="products-dropdown"
              hidden={activeDropdown !== "products"}
            >
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
          </div>

          <span className="nav-link nav-link-disabled" aria-disabled="true">
            Blogs <span className="nav-coming-soon">Coming soon</span>
          </span>

          <Link
            href="/book-a-demo/"
            className="nav-link nav-demo-link"
            onClick={closeNavigation}
          >
            Book A Demo
          </Link>

          <Link
            href="/client-login/"
            className="nav-link nav-login"
            onClick={closeNavigation}
          >
            <svg
              className="nav-login-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20a7 7 0 0 1 14 0" />
            </svg>
            <span>Client Login</span>
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
