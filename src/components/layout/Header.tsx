"use client";
import Image from "next/image";
import tabSvg from "../../../public/tab.svg";
import logoImage from "../../../public/logo.webp";
// import megaImage1 from "../../../public/mega-image_1-1.jpg";
// import megaImage2 from "../../../public/mega-image_1-2.jpg";
import wishlistImage from "../../../public/wishlist.svg";
import cartImage from "../../../public/cart.svg";
import accountImage from "../../../public/account.svg";
import searchImage from "../../../public/search.svg";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
function Header() {
  return (
    <>
      <TopBanner />
      <div className="header-main py-3">
        <div className="header-mobile flex justify-center items-center">
          <div className="container flex justify-between">
            <div className="flex items-center">
              <div className="header-mobile__left">
                <span className="hamburger-menu lg:hidden xl:hidden">
                  <Image src={tabSvg} alt="hamburger" width={17} height={12} />
                </span>
                <Link href="/" className="logo-shop">
                  <Image alt="logo" src={logoImage} className="w-30" />
                </Link>
              </div>
            </div>
            <div className="">
              <div className="header-desktop__nav hidden md:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-normal text-[#2C2C2C] text-[15px] hover:bg-transparent"
                        )}
                      >
                        <Link href="/collections/san-pham-moi-nhat">
                          NEW IN
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuContent className="container">
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="border-none">
                      <NavigationMenuTrigger

                        className={cn(
                          "text-[#2C2C2C] font-normal text-[15px] [&>svg]:hidden",
                          "hover:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:bg-transparent",
                        )}
                      >
                        SẢN PHẨM
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="container">
                        <div className="flex">
                          <div>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/category1"
                                className="block p-2 hover:bg-slate-100 rounded"
                              >
                                Category 1
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          <div >
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/category2"
                                className="block p-2 hover:bg-slate-100 rounded"
                              >
                                Category 2
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          <div >
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/category2"
                                className="block p-2 hover:bg-slate-100 rounded"
                              >
                                Category 2
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-normal text-[#2C2C2C] text-[15px] hover:bg-transparent"
                        )}
                      >
                        <Link href="/collections/san-pham-moi-nhat">
                          LOOKBOOK
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-transparent focus:bg-transparent",
                          "text-[#2C2C2C] font-normal text-[15px] [&>svg]:hidden",
                          "data-[state=open]:bg-transparent data-[state=open]:text-[#2C2C2C]",
                          "!bg-transparent !hover:bg-transparent !focus:bg-transparent !data-[state=open]:bg-transparent",
                          "group-hover:bg-transparent data-[state=open]:bg-transparent"
                        )}
                      >
                        DỊP/SỰ KIỆN
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="">
                        <ul className="grid gap-3 p-4 w-[200px]">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/category1"
                                className="block p-2 hover:bg-slate-100 rounded"
                              >
                                Category 1
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/category2"
                                className="block p-2 hover:bg-slate-100 rounded"
                              >
                                Category 2
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent hover:bg-transparent focus:bg-transparent",
                          "text-[#2C2C2C] font-normal text-[15px] [&>svg]:hidden",
                          "data-[state=open]:bg-transparent data-[state=open]:text-[#2C2C2C]",
                          "!bg-transparent !hover:bg-transparent !focus:bg-transparent !data-[state=open]:bg-transparent",
                          "group-hover:bg-transparent data-[state=open]:bg-transparent"
                        )}
                      >
                        BLOG
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="">
                        <ul className="grid gap-3 p-4 w-[200px]">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/category1"
                                className="block p-2 hover:bg-slate-100 rounded"
                              >
                                Category 1
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                href="/products/category2"
                                className="block p-2 hover:bg-slate-100 rounded"
                              >
                                Category 2
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-normal text-[#2C2C2C] text-[15px] hover:bg-transparent"
                        )}
                      >
                        <Link href="/collections/san-pham-moi-nhat">
                          CỬA HÀNG
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex items-center pr-7">
              <div className="header-mobile__right">
                <ul className="header-actions flex items-center">
                  <li className="pr-4">
                    <Link
                      href={"/pages/wishlist"}
                      className="relative block w-6 h-6"
                    >
                      <Image src={wishlistImage} alt="wishlist" />
                      <span className="absolute right-[-8px] top-[-4px] text-center text-white text-[10px] rounded-lg w-[15px] h-[15px] bg-[#D37171] font-bold">
                        0
                      </span>
                    </Link>
                  </li>
                  <li className="pr-4">
                    <Link href={"/cart"} className="relative block w-6 h-6">
                      <Image src={cartImage} alt="cart" />
                      <span className="absolute right-[-8px] top-[-4px] text-center text-white text-[10px] rounded-lg w-[15px] h-[15px] bg-[#D37171] font-bold">
                        0
                      </span>
                    </Link>
                  </li>
                  <li className="pr-4">
                    <Link href={"/account"} className="relative block w-6 h-6">
                      <Image src={accountImage} alt="account" />{" "}
                    </Link>
                  </li>
                  <li>
                    <span className="relative block w-6 h-6">
                      <Image src={searchImage} alt="search" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TopBanner() {
  return (
    <div className="relative isolate flex justify-center items-center gap-x-6 overflow-hidden bg-black px-6 py-0.5 sm:px-1.5 sm:before:flex-1">
      {/* <div
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        ></div>
      </div>
      <div
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-577/310 w-[36.0625rem] bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        ></div>
      </div> */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 flex-auto">
        <p className="text-sm/6 text-gray-900">
          <strong className="uppercase font-medium text-[11px] leading-0.5 text-white">Miễn phí đổi hàng 30 ngày</strong>
        </p>
      </div>
    </div>
  );
}

export { Header };
