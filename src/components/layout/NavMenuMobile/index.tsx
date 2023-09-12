import { NAV_MENU_LINKS } from "@/constants/navMenuLinks";
import { Menu, Transition } from "@headlessui/react";
import IconBurger from "../../../../public/assets/shared/mobile/icon-hamburger.svg";
import IconClose from "../../../../public/assets/shared/mobile/icon-close.svg";
import Link from "next/link";

export default function NavMenuMobile() {
  return (
    <nav className="z-50 flex w-[50%] justify-end sm:hidden">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>{open ? <IconClose /> : <IconBurger />}</Menu.Button>
            <Transition
              enter="duration-100 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-75 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Menu.Items
                as="ul"
                className="absolute left-0 mt-7 hidden w-screen flex-col gap-10 bg-black p-5 py-10 tracking-widest text-white ui-open:flex"
              >
                {NAV_MENU_LINKS.map((l) => (
                  <li key={"link_nav_" + l.label}>
                    <Menu.Item
                      as={Link}
                      href={l.href}
                      className="text-2xl uppercase leading-6 no-underline"
                    >
                      {l.label}
                    </Menu.Item>
                  </li>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </nav>
  );
}
