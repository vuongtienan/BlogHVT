import React from "react";
import LazyLoadImage from "./LazyLoadImage";

const PeopleGrid = () => {
  return (
    <section className="peopleGrid neu-01 line" data-items="3">
      <div className="wrapper">
        <div className="peopleGrid__heading">
          <h2 className="peopleGrid__title dark:text-slate-200">
            <span>Công ty TNHH Thương Mại & Dịch Vụ Hiệp Vĩnh Thành</span>
          </h2>
        </div>
        <div className="peopleGrid__container">
          <article className="peopleGrid__item">
            <figure className="relative">
              <LazyLoadImage
                photo={require("../assets/logos/img4.png")}
                blurhash="LBE2^B~q?aD%8{9F9G?a?bD*axNG"
              />
            </figure>
            
            <p className="peopleGrid__description dark:text-slate-200">
              Công ty TNHH Thương Mại & Dịch Vụ Hiệp Vĩnh Thành được thành lập năm 2009 tại địa chỉ Số 19C, Đường An Thạnh 08, Khu phố Thạnh Lộc, Phường An Thạnh, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam
               với Giám đốc là ông Lê Chánh Trung. Công ty chuyên cung cấp các loại thiết bị máy photocopy, máy in, các linh kiện sửa chửa và buôn bán phần mềm theo yêu cầu. Nếu bạn đang có nhu cầu sử dụng mà vẫn chưa tìm ra được nơi cung cấp thì hãy đến với công ty chúng tôi. Với lý tưởng sẽ trở thành một trong số những công ty nổi tiếng, những công ty hàng đầu về thương mại dịch vụ mang lại cho khách hàng những dịch vụ tốt nhất trên thị trường hiện nay. Chúng tôi luôn cố gắng, cải thiện với phương châm “ khách hàng là thượng đế phải quan tâm đến trải nghiệm của khách hàng”. Vậy nên, chúng tôi đang ngày càng nỗ lực, ngày càng hoàn thiện bản thân để có thể phù hợp với khách hàng.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PeopleGrid;
