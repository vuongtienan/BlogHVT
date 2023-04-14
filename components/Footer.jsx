import React from "react";
import Link from "next/link";
import { SvgLogo } from "./svgs/SvgLogo";
import { SvgFaceBook } from "./svgs/SvgFaceBook";
import { SvgYoutube } from "./svgs/SvgYoutube";
import { SvgInstagram } from "./svgs/SvgInstagram";

const Footer = () => {
  return (
    <footer className="footer dark:border-t dark:border-slate-200/10 dark:bg-gray-900 dark:after:bg-none dark:before:bg-none">
      <div className="wrapper">
        <div className="footer__top">
          <div className="footer__links anime">
            <div className="footer__logo">
              <SvgLogo />
            </div>
            <div className="footer__icons anime">
              <Link href="/" className="footer__icon">
                <SvgFaceBook />
              </Link>
              <Link href="/" className="footer__icon">
                <SvgYoutube />
              </Link>
              <Link href="/" className="footer__icon">
                <SvgInstagram />
              </Link>
            </div>
          </div>
          <div className="footer__links anime">
            <p className="footer__desc anime">Công ty TNHH Thương Mại & Dịch Vụ Hiệp Vĩnh Thành</p>
            <p className="footer__desc anime">
            Số 19C, Đường An Thạnh 08, Khu phố Thạnh Lộc, Phường An Thạnh, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam
            </p>
            <p className="footer__desc anime">Email: hiepvinhthanh@gmail.com</p>
            <p className="footer__desc anime">Hotline: 0988607617</p>
          </div>
          <div className="footer__links anime">
            <Link href="/" className="footer__link anime">
              Câu hỏi thường gặp
            </Link>
            <Link href="/" className="footer__link anime">
              Tin tức
            </Link>
            <Link href="/" className="footer__link anime">
              Chính sách & bảo mật
            </Link>
          </div>
        </div>
        <div className="footer__bottom border-t border-slate-200/10 pt-6">
          <p className="footer__text">© HVT. Đã đăng ký Bản quyền</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
