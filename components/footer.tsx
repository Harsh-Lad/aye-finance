import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 space-y-3">
              <Image
                src={"/Aye-Finance-LOGO.jpg"}
                alt="Aye Finance Logo"
                width={150}
                height={100}
              />
              <p className="text-sm mb-4">
                Aye Finance Limited (formerly known as Aye Finance Private
                Limited)
              </p>
              <p className="text-xs">
                <strong>CIN:</strong> U65921DL1993PLC283660
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">0124-4844000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:customer.care@ayefin.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  customer.care@ayefin.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Our Offices
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium mb-1">Registered Office</h5>
                <p className="text-xs leading-relaxed">
                  M-5, Magnum House-1, Community Centre, Karampura, West Delhi,
                  New Delhi-110015
                </p>
              </div>
              <div>
                <h5 className="text-sm font-medium mb-1">Corporate Office</h5>
                <p className="text-xs leading-relaxed">
                  Unit No. - 701-711, 7th Floor, Unitech Commercial Tower-2,
                  Sector-45, Arya Samaj Road, Gurugram – 122003, Haryana, India
                </p>
              </div>
            </div>
          </div>

          {/* Policies & Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Policies
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition-colors"
              >
                Customer Awareness – SMA & NPA
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition-colors"
              >
                NACH Mandate
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition-colors"
              >
                Service Providers
              </a>
              <a
                href="#"
                className="block text-sm hover:text-primary transition-colors"
              >
                Link to SMART ODR
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Find Us
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Registered Office Map */}
            <div className="space-y-2">
              <h5 className="text-sm font-medium">
                Registered Office - Karampura, West Delhi
              </h5>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5543059825097!2d77.15254741507826!3d28.57518188242741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d1c1c1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sKarampura%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Registered Office Location"
                />
              </div>
            </div>

            {/* Corporate Office Map */}
            <div className="space-y-2">
              <h5 className="text-sm font-medium">
                Corporate Office - Sector 45, Gurugram
              </h5>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7147484193266!2d77.07012741507506!3d28.444994382469464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d1c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sSector%2045%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Corporate Office Location"
                />
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            Copyright © 2025 Aye Finance. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Regulated by RBI</span>
            <span>•</span>
            <span>NBFC License</span>
            <span>•</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
