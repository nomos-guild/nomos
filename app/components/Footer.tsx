import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <Container>
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">NOMOS</h2>
              <p className="text-gray-400 max-w-xs">
                Tools, initiatives and architecture to advance Cardano Onchain Governance.
              </p>
            </div>       
            
            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/nomos-guild" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center">
            <p className="text-gray-500 text-sm">
              NOMOS GUILD MMXXV | BY MESH & SIDAN LAB | BUILDING ON CARDANO 
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}