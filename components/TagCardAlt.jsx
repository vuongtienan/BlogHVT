import React from "react";
import Link from "next/link";

const TagCardAlt = ({ post }) => {
  return (
    <div>
      {post.categories.map((c, index) => {
        let cat;
        if (c === "innovation" || c === "tourism") {
          cat = "economy";
        } else if (
          c === "civil-protection" ||
          c === "education" ||
          c === "housing" ||
          c === "urban-planning"
        ) {
          cat = "society";
        } else {
          cat = null;
        }
        if (cat) {
          return (
            <Link
              key={index}
              href={`/articles/category/${cat}/${c}`}
              className="inline-flex items-center uppercase tracking-[0.1px] text-blue-900 transition-opacity duration-200 ease-in hover:opacity-60 dark:text-blue-400 [&:nth-last-child(2)]:hidden"
            >
              <span className="pt-[3px] text-sm font-bold leading-none">
                {[
                  c === "economy"
                  ? "Phần Mềm"
                                : c === "innovation"
                                ? "Công Nghệ Web"
                                : c === "tourism"
                                ? "Chương Trình"
                                : c === "culture"
                                ? "Máy Photocopy"
                                : c === "politics"
                                ? "Máy In"
                                : c === "society"
                                ? "Linh Kiện"
                                : c === "civil-protection"
                                ? "Máy Photocopy"
                                : c === "education"
                                ? "Máy In"
                                : c === "housing"
                                ? "Dòng Mực"
                                : c === "urban-planning"
                                ? "Khác"
                                : c === "mobility"
                                ? "Lỗi Thường Gặp"
                                : c === "environment"
                                ? "Tin Tức"
                                : c === "sports"
                                ? "Thủ Thuật"
                    : null,
                ]}
              </span>
            </Link>
          );
        } else {
          return (
            <Link
              key={index}
              href={`/articles/category/${c}`}
              className="inline-flex items-center uppercase tracking-[0.1px] text-blue-900 transition-opacity duration-200 ease-in hover:opacity-60 dark:text-blue-400 [&:nth-last-child(2)]:hidden"
            >
              <span className="pt-[3px] text-sm font-bold leading-none">
                {[
                  c === "economy"
                              ? "Phần Mềm"
                    : cat === "culture"
                    ? "Máy Photocopy"
                    : cat === "politics"
                    ? "Máy In"
                    : cat === "society"
                    ? "Linh Kiện"
                    : cat === "mobility"
                    ? "Lỗi Thường Gặp"
                    : cat === "environment"
                    ? "Tin Tức"
                    : cat === "sports"
                    ? "Thủ Thuật"
                    
                    : null,
                ]}
              </span>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default TagCardAlt;
