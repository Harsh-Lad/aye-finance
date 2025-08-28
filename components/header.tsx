"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  const navigationItems = [
    {
      label: "Home",
      href: "/",
      children: null,
    },
    {
      label: "Our Company",
      href: "#",
      children: [
        { label: "From MD's Desk", href: "/md-desk" },
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Our Investors", href: "/investors" },
        { label: "Our Accolades", href: "/accolades" },
      ],
    },
    {
      label: "Products",
      href: "#",
      children: [
        { label: "Why Us", href: "/why-us" },
        { label: "Hypothecation Loan (HL)", href: "/hypothecation-loan" },
        { label: "Mortgage Loan (ML)", href: "/mortgage-loan" },
        { label: "'Saral' Property Loan", href: "/saral-property-loan" },
        { label: "Shakti Loan", href: "/shakti-loan" },
        { label: "SwitchPe", href: "/switchpe" },
        { label: "ECLGS Loan", href: "/eclgs-loan" },
        { label: "How It Works", href: "/how-it-works" },
      ],
    },
    {
      label: "Media",
      href: "#",
      children: [
        { label: "Newsroom", href: "/newsroom" },
        { label: "Events", href: "/events" },
      ],
    },
    {
      label: "Impact",
      href: "#",
      children: [
        { label: "FAME", href: "/fame" },
        { label: "Make A Difference", href: "/make-difference" },
        { label: "Social Impact", href: "/social-impact" },
        { label: "Customer Stories", href: "/customer-stories" },
      ],
    },
    {
      label: "Investor Relations",
      href: "#",
      children: [
        { label: "Disclosures", href: "/disclosures" },
        { label: "Financial Statements", href: "/financial-statements" },
        { label: "Credit Ratings", href: "/credit-ratings" },
        { label: "Newsletters", href: "/newsletters" },
        { label: "Regulation 52 (7) Compliance", href: "/regulation-52-7" },
        { label: "Regulation 62 of SEBI (LODR)", href: "/regulation-62-sebi" },
        { label: "Corporate Social Responsibility (CSR)", href: "/csr" },
        { label: "DRHP", href: "/drhp" },
      ],
    },
    {
      label: "Careers",
      href: "#",
      children: [
        { label: "Aye Way", href: "/aye-way" },
        { label: "Why Aye", href: "/why-aye" },
        { label: "Life at Aye", href: "/life-at-aye" },
        { label: "Join Us", href: "/join-us" },
      ],
    },
    {
      label: "Contact Us",
      href: "/contact",
      children: null,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        mobileButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !mobileButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const getGridLayout = (childrenCount: number) => {
    if (childrenCount <= 2) return "grid-cols-1";
    if (childrenCount <= 4) return "grid-cols-1 md:grid-cols-2";
    if (childrenCount <= 6) return "grid-cols-2";
    return "grid-cols-2";
  };

  const getMenuWidth = (childrenCount: number) => {
    if (childrenCount <= 2) return "w-[120px]";
    if (childrenCount <= 4) return "w-[120px] md:w-[200px]";
    if (childrenCount <= 6) return "w-[200px] md:w-[320px]";
    return "w-[320px] md:w-[400px]";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      {/* Glassmorphic Background */}
      <div className="bg-black/10 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/Aye-Finance-LOGO.jpg"
                alt="Aye Finance Logo"
                width={150}
                height={100}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <NavigationMenu
              viewport={false}
              className="hidden lg:flex relative z-50"
            >
              <NavigationMenuList className="gap-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 data-[state=open]:bg-white/15 text-white font-medium border-0 focus:bg-white/10">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={cn(
                              "grid gap-2 p-4",
                              getMenuWidth(item.children.length),
                              getGridLayout(item.children.length)
                            )}
                          >
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="group block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="line-clamp-1">
                                        {child.label}
                                      </span>
                                      <div className="w-0 group-hover:w-4 h-4 overflow-hidden transition-all duration-200">
                                        <svg
                                          className="w-4 h-4 text-primary"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-white/10 text-white font-medium border-0"
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button
              ref={mobileButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-black/10 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4 max-h-[70vh] overflow-y-auto scrollbar-hide">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <Collapsible>
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-left text-white font-medium hover:bg-white/10 rounded-lg transition-colors duration-200">
                          <span>{item.label}</span>
                          <ChevronDown className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2">
                          <div className="pl-4 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
