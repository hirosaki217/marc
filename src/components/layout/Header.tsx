"use client";
import Image from "next/image";
import tabSvg from "../../../public/tab.svg";
import logoImage from "../../../public/logo.webp";
import megaImage1 from "../../../public/mega-image_1-1.jpg";
import megaImage2 from "../../../public/mega-image_1-2.jpg";
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
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Menu, ShoppingCart, User, X } from "lucide-react";
function Header() {

  return (
    <>
      <TopBanner />
      <Navbar />
    </>
  );
}

function TopBanner() {
  return (
    <div className="relative isolate flex justify-center items-center gap-x-6 overflow-hidden bg-black px-6 py-0.5 sm:px-1.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 flex-auto">
        <p className="text-sm/6 text-gray-900">
          <strong className="uppercase font-medium text-[11px] leading-0.5 text-white">Miễn phí đổi hàng 30 ngày</strong>
        </p>
      </div>
    </div>
  );
}


const navigationItems = [
  {
    title: "NEW IN",
    href: "#",
    dropdown: undefined,
  },
  {
    title: "SẢN PHẨM",
    href: "#",
    dropdown: undefined,
    dropdownUi: 12345

  },
  { title: "LOOKBOOK", href: "#about", dropdown: undefined },
  {
    title: "DỊP/SỰ KIỆN", href: "#contact", dropdown: [
      { title: "Consulting", href: "#consulting" },
      { title: "Repairs", href: "#repairs" },
      { title: "Installation", href: "#installation" },
    ],
  },
  {
    title: "BLOG", href: "#contact", dropdown: [
      { title: "Consulting", href: "#consulting" },
      { title: "Repairs", href: "#repairs" },
      { title: "Installation", href: "#installation" },
    ],
  },
  {
    title: "CỬA HÀNG", href: "#contact", dropdown: [

    ],
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle mouse enter on menu items
  const handleMouseEnter = (title: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    setActiveDropdown(title)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown after a delay
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay before hiding
  }

  // Cancel the timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background ">
        <div className="container mx-auto">
          <div className="mx-auto flex items-center justify-between py-4">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link href="/" className="logo-shop w-30">
                <Image alt="logo" src={logoImage} className="w-30" />
              </Link>
            </div>
            {/* Search */}
            <div className="md:hidden flex-1 ">

              <form className="flex items-center w-full  mx-auto">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Image className="w-4" src={searchImage} alt="search" />
                  </div>
                  <input type="text" id="simple-search" className="bg-gray-50 focus:outline-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 focus:outline-1" placeholder="Search branch name..." required />
                </div>
              </form>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center sm:gap-1">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.dropdown || item.dropdownUi && handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <Button
                      variant="ghost"
                      className={cn("font-normal text-[#2C2C2C] text-[15px]", "flex items-center gap-1 px-2 py-1.5 outline-none hover:bg-transparent hover:text-[#7a7979]", activeDropdown === item.title && "text-[#7a7979]")}
                    >
                      {item.title}
                    </Button>
                  ) : (
                    <Button variant="ghost" asChild className="px-2 py-1.5 font-normal text-[#2C2C2C] text-[15px] outline-none hover:bg-transparent hover:text-[#7a7979]">
                      <Link className="cursor-default" href={item.href}>{item.title}</Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* User Actions */}
            <div className="hidden items-center gap-2 md:flex">
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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-transparent cursor-pointer px-5 md:py-5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Centered Dropdown Container */}
          {activeDropdown && (
            <div
              className="absolute left-1/2 -translate-x-1/2 z-50 w-full bg-background container py-10"
              onMouseEnter={() => handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mx-auto w-full px-4 py-4">
                
                {navigationItems.map(
                  (item) => {
                    if (item.title === activeDropdown) {
                      if (item.dropdown) return (
                        <div key={item.title} className="grid gap-2 md:grid-cols-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className="block rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      )

                      if (item.dropdownUi) return (<div key={item.title} className="grid grid-cols-12 gap-8">
                        <div className="col-span-3 rounded-xl overflow-hidden relative">
                          <Image src={megaImage1} alt="mega-image-1" />
                          <div className="absolute group hover:bg-linear-to-t from-[#00000060] to-transparent top-0 left-0 w-full h-full px-5 py-8 content-end">
                            <span className="text-white hidden group-hover:block font-light">Mua ngay</span>
                          </div>
                        </div>
                        <div className="col-span-3 rounded-xl overflow-hidden relative">
                          <Image src={megaImage2} alt="mega-image-2" />
                          <div className="absolute group hover:bg-linear-to-t from-[#00000060] to-transparent top-0 left-0 w-full h-full px-5 py-8 content-end">
                            <span className="text-white hidden group-hover:block font-light">Mua ngay</span>
                          </div>
                        </div>
                        <div className="col-span-6">
                          <div className="grid grid-cols-3">
                            <div className="px-9 border-r-1 border-gray-300">
                              <h4 className="pb-3">Ưu đãi</h4>
                              <ul className="mega-child">
                                <li className="text-sm mb-1"><a href="https://marc.com.vn/account/register">Tặng 50K thành viên mới</a></li>
                              </ul>
                            </div>
                            <div className="px-9 border-r-1 border-gray-300">
                              <h4 className="pb-3">Sản phẩm</h4>
                              <ul className="mega-child">
                                <li className="text-sm mb-1"><a href="/collections/marc-signature">MARC Signature</a></li>
                                <li className="text-sm mb-1"><a href="/collections/ao-khoac-blazer">Áo Blazer</a></li>
                                <li className="text-sm mb-1"><a href="/collections/quan-suong">Quần ống suông</a></li>
                                <li className="text-sm mb-1"><a href="/collections/ao-so-mi">Áo sơ mi công sở</a></li>
                                <li className="text-sm mb-1"><a href="/collections/ao-kieu">Áo kiểu</a></li>
                                <li className="text-sm mb-1"><a href="/collections/ao-thun-nu">Áo thun</a></li>
                                <li className="text-sm mb-1"><a href="/collections/dam">Đầm</a></li>
                                <li className="text-sm mb-1"><a href="/collections/vay">Váy</a></li>
                                <li className="text-sm mb-1"><a href="/collections/quan">Quần</a></li>
                                <li className="text-sm mb-1"><a href="/collections/do-boi">Đồ bơi</a></li>
                              </ul>
                            </div>
                            <div className="px-9">
                              <h4 className="pb-3">Trending</h4>
                              <ul className="mega-child">
                                <li className="text-sm mb-1"><a href="/blogs/mac-dep/phoi-ao-blazer-voi-dam">Phối áo Blazer với Đầm</a></li>
                                <li className="text-sm mb-1"><a href="/collections/quan-suong">Quần suông hack dáng</a></li>
                                <li className="text-sm mb-1"><a href="/collections/ao-thun-nu">Áo thun năng động</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>)
                    }

                  },
                )}
              </div>
            </div>
          )}
        </div>


        {/* Mobile Navigation */}
        <div className={cn("absolute left-0 right-0 flex flex-col bg-background px-10 md:hidden ", isMenuOpen ? "block" : "hidden")}>
          <div className="flex flex-col space-y-4 pt-2">
            {navigationItems.map((item) => (
              <div key={item.title} className="py-1">
                {item.dropdown || item.dropdownUi ? (
                  <MobileDropdown item={item} />
                ) : (
                  <Link href={item.href} className="block py-2 font-normal text-[#2C2C2C] text-[15px]" onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            {/* <div className="flex items-center gap-4 pt-4">
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
          </div> */}
          </div>
        </div>
      </nav>
      <div className={cn("absolute bottom-0 py-2 right-0 left-0 md:hidden z-50")}>
        <ul className="footer-toolbar__list grid grid-cols-5 gap-1">
          <li className="">
            <a href="/" className="toolbar__item flex flex-col justify-center items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.115 0.427896C10.809 0.152426 10.4118 0 10 0C9.58824 0 9.19105 0.152426 8.885 0.427896L0 8.42456V17.0912C0 17.7985 0.280952 18.4768 0.781049 18.9768C1.28115 19.4769 1.95942 19.7579 2.66667 19.7579H17.3333C18.0406 19.7579 18.7189 19.4769 19.219 18.9768C19.719 18.4768 20 17.7985 20 17.0912V8.42456L11.115 0.427896ZM12.5 18.0887H7.5V13.9004C7.5 13.2374 7.76339 12.6015 8.23223 12.1326C8.70107 11.6638 9.33696 11.4004 10 11.4004C10.663 11.4004 11.2989 11.6638 11.7678 12.1326C12.2366 12.6015 12.5 13.2374 12.5 13.9004V18.0887ZM18.3333 17.0887C18.3333 17.3539 18.228 17.6083 18.0404 17.7958C17.8529 17.9834 17.5985 18.0887 17.3333 18.0887H14.1667V13.9004C14.1667 12.7953 13.7277 11.7355 12.9463 10.9541C12.1649 10.1727 11.1051 9.73373 10 9.73373C8.89493 9.73373 7.83512 10.1727 7.05372 10.9541C6.27232 11.7355 5.83333 12.7953 5.83333 13.9004V18.0887H2.66667C2.40145 18.0887 2.1471 17.9834 1.95956 17.7958C1.77202 17.6083 1.66667 17.3539 1.66667 17.0887V9.16623L10 1.66623L18.3333 9.16623V17.0887Z" fill="#B1B1B1"></path>
              </svg>
              <span className="font-normal text-[#B1B1B1] text-sm pt-1">Trang chủ</span>
            </a>
          </li>
          <li className="flex justify-center items-center">
            <a href="/collections/all" className="toolbar__item flex flex-col justify-center items-center">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8883 19.3237L18.5069 16.9422C19.9039 15.2337 19.6513 12.7161 17.9427 11.3191C16.2341 9.92212 13.7166 10.1747 12.3196 11.8832C10.9226 13.5918 11.1752 16.1094 12.8837 17.5064C14.3554 18.7097 16.4711 18.7097 17.9427 17.5064L20.3242 19.8878C20.4827 20.0409 20.7353 20.0365 20.8883 19.878C21.0377 19.7234 21.0377 19.4783 20.8883 19.3237ZM12.2278 14.4191C12.2278 12.6563 13.6568 11.2273 15.4196 11.2273C17.1824 11.2273 18.6114 12.6563 18.6114 14.4191C18.6114 16.1819 17.1824 17.6109 15.4196 17.6109C13.6577 17.6089 12.2298 16.1811 12.2278 14.4191ZM16.2176 12.8232C15.9195 12.8246 15.6335 12.9412 15.4196 13.1488C15.2057 12.9412 14.9197 12.8246 14.6217 12.8232C13.9393 12.8469 13.4044 13.4175 13.4248 14.0999C13.4248 14.8979 14.2391 15.721 14.9225 16.2703C15.2134 16.502 15.6258 16.502 15.9167 16.2703C16.6002 15.7209 17.4145 14.8979 17.4145 14.0999C17.4349 13.4175 16.8999 12.8469 16.2176 12.8232ZM15.422 15.648C14.6823 15.0535 14.2227 14.459 14.2227 14.0999C14.2028 13.8582 14.3803 13.6452 14.6217 13.6212C14.863 13.6452 15.0406 13.8582 15.0206 14.0999C15.0206 14.3203 15.1993 14.4989 15.4196 14.4989C15.64 14.4989 15.8186 14.3203 15.8186 14.0999C15.7987 13.8582 15.9762 13.6452 16.2176 13.6212C16.4589 13.6452 16.6365 13.8582 16.6166 14.0999C16.6165 14.459 16.1569 15.0535 15.422 15.648Z" fill="#B1B1B1"></path>
                <rect x="0.5" y="0.5" width="8.16667" height="8.16667" rx="0.5" stroke="#B1B1B1"></rect>
                <rect x="0.5" y="11.3335" width="8.16667" height="8.16667" rx="0.5" stroke="#B1B1B1"></rect>
                <rect x="11.333" y="0.5" width="8.16667" height="8.16667" rx="0.5" stroke="#B1B1B1"></rect>
              </svg>

              <span className="font-normal text-[#B1B1B1] text-sm pt-1">Danh mục</span>
            </a>
          </li>
          <li className="flex justify-center items-center">
            <a href="/pages/danh-sach-cua-hang" className="toolbar__item flex flex-col justify-center items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8.33333L18.1667 0H1.83333L0.02 8.1525L0 9.16667C0.00302225 9.97107 0.299312 10.7468 0.833333 11.3483V17.5C0.833333 18.163 1.09673 18.7989 1.56557 19.2678C2.03441 19.7366 2.67029 20 3.33333 20H16.6667C17.3297 20 17.9656 19.7366 18.4344 19.2678C18.9033 18.7989 19.1667 18.163 19.1667 17.5V11.3483C19.7007 10.7468 19.997 9.97107 20 9.16667V8.33333ZM1.66667 8.42417L3.16667 1.66667H5.83333V5H7.5V1.66667H12.5V5H14.1667V1.66667H16.8333L18.3333 8.42417V9.16667C18.3333 9.60869 18.1577 10.0326 17.8452 10.3452C17.5326 10.6577 17.1087 10.8333 16.6667 10.8333H15.8333C15.3913 10.8333 14.9674 10.6577 14.6548 10.3452C14.3423 10.0326 14.1667 9.60869 14.1667 9.16667H12.5C12.5 9.60869 12.3244 10.0326 12.0118 10.3452C11.6993 10.6577 11.2754 10.8333 10.8333 10.8333H9.16667C8.72464 10.8333 8.30072 10.6577 7.98816 10.3452C7.67559 10.0326 7.5 9.60869 7.5 9.16667H5.83333C5.83333 9.60869 5.65774 10.0326 5.34518 10.3452C5.03262 10.6577 4.60869 10.8333 4.16667 10.8333H3.33333C2.89131 10.8333 2.46738 10.6577 2.15482 10.3452C1.84226 10.0326 1.66667 9.60869 1.66667 9.16667V8.42417ZM16.6667 18.3333H3.33333C3.11232 18.3333 2.90036 18.2455 2.74408 18.0893C2.5878 17.933 2.5 17.721 2.5 17.5V12.3817C2.77155 12.4567 3.05163 12.4965 3.33333 12.5H4.16667C4.64158 12.4985 5.11061 12.3948 5.54195 12.1961C5.9733 11.9974 6.35687 11.7083 6.66667 11.3483C6.97646 11.7083 7.36004 11.9974 7.79138 12.1961C8.22273 12.3948 8.69176 12.4985 9.16667 12.5H10.8333C11.3065 12.5002 11.7743 12.3995 12.2054 12.2045C12.6365 12.0095 13.0211 11.7247 13.3333 11.3692C13.6456 11.7247 14.0301 12.0095 14.4612 12.2045C14.8924 12.3995 15.3602 12.5002 15.8333 12.5H16.6667C16.9484 12.4965 17.2285 12.4567 17.5 12.3817V17.5C17.5 17.721 17.4122 17.933 17.2559 18.0893C17.0996 18.2455 16.8877 18.3333 16.6667 18.3333Z" fill="#B1B1B1"></path>
              </svg>

              <span className="font-normal text-[#B1B1B1] text-sm pt-1">Cửa hàng</span>
            </a>
          </li>

          <li className="flex justify-center items-center">
            <a href="/account?view=diemthuong" className="toolbar__item flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1 18.053H19M1 1.94775V14.6019H19V1.94775L14.5 6.54925L9.99999 1.94775L5.5 6.54925L1 1.94775Z" stroke="#B1B1B1" strokeWidth="1.56612" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="font-normal text-[#B1B1B1] text-sm pt-1">Membership</span>
            </a>
          </li>

          <li className="flex justify-center items-center">
            <a href="/account" className="toolbar__item flex flex-col justify-center items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_618_15358)">
                  <path d="M10 10C10.9889 10 11.9556 9.70676 12.7779 9.15735C13.6001 8.60794 14.241 7.82705 14.6194 6.91342C14.9978 5.99979 15.0969 4.99446 14.9039 4.02455C14.711 3.05465 14.2348 2.16373 13.5355 1.46447C12.8363 0.765206 11.9454 0.289002 10.9755 0.0960758C10.0055 -0.0968503 9.00021 0.00216643 8.08658 0.380605C7.17295 0.759043 6.39206 1.39991 5.84265 2.22215C5.29324 3.0444 5 4.0111 5 5C5.00132 6.32568 5.52853 7.59668 6.46593 8.53407C7.40332 9.47147 8.67432 9.99868 10 10ZM10 1.66667C10.6593 1.66667 11.3037 1.86217 11.8519 2.22844C12.4001 2.59471 12.8273 3.1153 13.0796 3.72439C13.3319 4.33348 13.3979 5.0037 13.2693 5.6503C13.1407 6.29691 12.8232 6.89085 12.357 7.35703C11.8908 7.8232 11.2969 8.14067 10.6503 8.26929C10.0037 8.3979 9.33348 8.33189 8.72439 8.0796C8.1153 7.82731 7.59471 7.40007 7.22843 6.8519C6.86216 6.30374 6.66667 5.65927 6.66667 5C6.66667 4.11595 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667Z" fill="#B1B1B1"></path>
                  <path d="M10 11.667C8.01155 11.6692 6.10518 12.4601 4.69914 13.8661C3.29309 15.2722 2.50221 17.1785 2.5 19.167C2.5 19.388 2.5878 19.6 2.74408 19.7562C2.90036 19.9125 3.11232 20.0003 3.33333 20.0003C3.55435 20.0003 3.76631 19.9125 3.92259 19.7562C4.07887 19.6 4.16667 19.388 4.16667 19.167C4.16667 17.6199 4.78125 16.1362 5.87521 15.0422C6.96917 13.9482 8.4529 13.3337 10 13.3337C11.5471 13.3337 13.0308 13.9482 14.1248 15.0422C15.2188 16.1362 15.8333 17.6199 15.8333 19.167C15.8333 19.388 15.9211 19.6 16.0774 19.7562C16.2337 19.9125 16.4457 20.0003 16.6667 20.0003C16.8877 20.0003 17.0996 19.9125 17.2559 19.7562C17.4122 19.6 17.5 19.388 17.5 19.167C17.4978 17.1785 16.7069 15.2722 15.3009 13.8661C13.8948 12.4601 11.9884 11.6692 10 11.667Z" fill="#B1B1B1"></path>
                </g>
                <defs>
                  <clipPath id="clip0_618_15358">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>

              <span className="font-normal text-[#B1B1B1] text-sm pt-1">Tài khoản</span>
            </a>
          </li>
        </ul>
      </div>
    </>

  )
}

// Mobile dropdown component
function MobileDropdown({ item }: { item: (typeof navigationItems)[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between font-normal text-[#2C2C2C] text-[15px]"
      >
        {item.title}
      </button>
      {isOpen && (
        <div className="ml-4 mt-2 flex flex-col space-y-2 border-l pl-4">
          {item.dropdown?.map((dropdownItem) => (
            <Link key={dropdownItem.title} href={dropdownItem.href} className="py-1.5 text-[#2C2C2C]" onClick={() => setIsOpen(false)}>
              {dropdownItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export { Header };
