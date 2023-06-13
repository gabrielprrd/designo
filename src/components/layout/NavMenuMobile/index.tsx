import { NAV_MENU_LINKS } from "@/constants/navMenuLinks";
import { Menu, Transition } from "@headlessui/react";
import IconBurger from "../../../../public/assets/shared/mobile/icon-hamburger.svg";
import IconClose from "../../../../public/assets/shared/mobile/icon-close.svg";
export default function NavMenuMobile() {
  return (
    <div className="sm:hidden">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>{open ? <IconClose /> : <IconBurger />}</Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-75 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Menu.Items className="absolute left-0 mt-7 hidden w-screen flex-col gap-10 bg-black p-5 py-10 tracking-widest text-white ui-open:flex">
                {NAV_MENU_LINKS.map((l) => (
                  <Menu.Item
                    as="a"
                    key={"link_nav_" + l.label}
                    href={l.href}
                    className="text-2xl uppercase leading-6 no-underline"
                  >
                    {l.label}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
