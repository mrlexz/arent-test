import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.svg";
import IconMemo from "../../assets/icons/icon_memo.svg";
import IconChallenge from "../../assets/icons/icon_challenge.svg";
import IconInfo from "../../assets/icons/icon_info.svg";
import IconMenu from "../../assets/icons/icon_menu.svg";
import IconClose from "../../assets/icons/icon_close.svg";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuExpanded &&
        wrapperRef.current &&
        !wrapperRef.current?.contains(event.target as Node) &&
        closeRef.current &&
        !closeRef.current?.contains(event.target as Node)
      ) {
        setMenuExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuExpanded, wrapperRef]);

  return (
    <header className="w-full bg-[#414141]">
      <nav className="flex justify-between items-center px-[160px] py-2">
        <NavLink to="/" className="max-h-10">
          <img src={logo} width="109" height="40" className="max-h-10" />
        </NavLink>

        <div className="flex">
          <ul className="flex">
            <li className="flex min-w-[160px]">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `w-full flex items-center px-2 py-2 gap-2 ${
                    isActive ? "text-[#FF963C]" : "text-white"
                  }`;
                }}
              >
                <img
                  src={IconMemo}
                  width="32"
                  height="32"
                  className="max-h-8"
                />
                <span className="text-bas font-light font-noto_sans">
                  自分の記録
                </span>
              </NavLink>
            </li>
            <li className="flex min-w-[160px]">
              <NavLink
                to="/my-record"
                className={({ isActive }) => {
                  return `flex items-center px-2 py-2 gap-2 ${
                    isActive ? "text-[#FF963C]" : "text-white"
                  }`;
                }}
              >
                <img
                  src={IconChallenge}
                  width="32"
                  height="32"
                  className="max-h-8"
                />
                <span className="text-base font-light font-noto_sans">
                  チャレンジ
                </span>
              </NavLink>
            </li>
            <li className="flex min-w-[160px]">
              <NavLink
                to="/column-page"
                className={({ isActive }) => {
                  return `flex items-center px-2 py-2 gap-2 relative ${
                    isActive ? "text-[#FF963C]" : "text-white"
                  }`;
                }}
              >
                <div className="relative">
                  <img
                    src={IconInfo}
                    width="32"
                    height="32"
                    className="max-h-8"
                  />
                  <div className="absolute top-[-5px] right-[-5px] bg-[#EA6C00] w-4 h-4 rounded-full flex justify-center items-center">
                    <span className="text-white text-[10px] leading-[12px] font-normal">
                      1
                    </span>
                  </div>
                </div>

                <span className="text-bas font-light font-noto_sans">
                  お知らせ
                </span>
              </NavLink>
            </li>
            <li
              ref={closeRef}
              className="flex justify-between items-center cursor-pointer ml-2"
              onClick={() => {
                if (menuExpanded) {
                  setMenuExpanded(false);
                } else {
                  setMenuExpanded(true);
                }
              }}
            >
              {!menuExpanded ? (
                <img
                  src={IconMenu}
                  width="32"
                  height="32"
                  className="max-h-8"
                />
              ) : (
                <img
                  src={IconClose}
                  width="32"
                  height="32"
                  className="max-h-8"
                />
              )}
            </li>
          </ul>
          <div
            ref={wrapperRef}
            className={`${
              menuExpanded ? " visible opacity-100" : "invisible opacity-0"
            } absolute w-[280px] right-[162px] top-[44px] flex flex-col z-10 bg-[#777777] transition-opacity ease-in-out delay-50 duration-300`}
          >
            <NavLink
              to="/my-record"
              className={({ isActive }) => {
                return `px-8 py-6 border-b-2 border-b-[#ffffff] border-opacity-20 ${
                  isActive ? "text-[#FF963C]" : "text-white"
                }`;
              }}
            >
              <span className="py-3 text-base font-semibold font-noto_sans">
                自分の記録
              </span>
            </NavLink>
            <NavLink
              to="/"
              className="px-8 py-6 border-b-2 border-b-[#ffffff] border-opacity-20"
            >
              <span className="py-3 text-base font-semibold font-noto_sans">
                体重グラフ
              </span>
            </NavLink>
            <NavLink
              to="/"
              className="px-8 py-6 border-b-2 border-b-[#ffffff] border-opacity-20"
            >
              <span className="py-3 text-base font-semibold font-noto_sans">
                目標
              </span>
            </NavLink>
            <NavLink
              to="/"
              className="px-8 py-6 border-b-2 border-b-[#ffffff] border-opacity-20"
            >
              <span className="py-3 text-base font-semibold font-noto_sans">
                選択中のコース
              </span>
            </NavLink>
            <NavLink
              to="/column-page"
              className={({ isActive }) => {
                return `px-8 py-6 border-b-2 border-b-[#ffffff] border-opacity-20 ${
                  isActive ? "text-[#FF963C]" : "text-white"
                }`;
              }}
            >
              <span className="py-3 text-base font-semibold font-noto_sans">
                コラム一覧
              </span>
            </NavLink>
            <NavLink
              to="/"
              className="px-8 py-6 border-b-2 border-b-[#ffffff] border-opacity-20"
            >
              <span className="py-3 text-base font-semibold font-noto_sans">
                設定
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
