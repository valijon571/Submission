import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { PiFileTextBold } from "react-icons/pi";
import { CssStyle } from "./CssStyle";

const Presentation = () => {
  return (
    <>
      <CssStyle>
        <header className="header"></header>
        <div className="main">
          <div className="main_card"></div>
          <div className="main_cards">
            <h4 className="weak">
              Заявки
              <span className="point">
                <TbPointFilled className="pointfilled" />
              </span>
              <span className="number">22</span>
            </h4>
            <div className="main_cards_cards">
              {/* ==============================Новые====================== */}

              <div className="cards">
                <header className="card_header">
                  <h4 className="card_header_weak">
                    Новые
                    <span className="point">
                      <TbPointFilled className="pointfilled" />
                    </span>
                    <span className="number">4</span>
                  </h4>
                </header>
                <div className="items">
                  <div className="card">
                    <div className="card_main">
                      <h5>UI/UX дизайнер</h5>
                      <p>Отдел разработки мобильного...</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Маркетолог</h5>
                      <p>Отдел маркетинга</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />2
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse2.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Floyd Miles</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>{" "}
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse3.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Theresa Webb</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>{" "}
                  <div className="card">
                    <div className="card_main">
                      <h5>UI/UX дизайнер</h5>
                      <p>Отдел разработки мобильного...</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse4.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Vanessa Johnson</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ===============================Текущие================== */}
              <div className="cards">
                <header className="card_header">
                  <h4 className="card_header_weak">
                    Текущие
                    <span className="point">
                      <TbPointFilled className="pointfilled" />
                    </span>
                    <span className="number">7</span>
                  </h4>
                </header>
                <div className="items">
                  <div className="card">
                    <div className="card_main">
                      <h5>PHP Developer</h5>
                      <p>Housekeepers</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse5.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Kristin Watson</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Freshers</h5>
                      <p>Finance</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse6.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Jacob Jones</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>UI UX Designer</h5>
                      <p>Management</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse7.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Wade Warren</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Joomla Developer</h5>
                      <p>Accounting</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse8.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Cameron Williamson</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>{" "}
                  <div className="card">
                    <div className="card_main">
                      <h5>Python Developer</h5>
                      <p>Laundry</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse9.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Devon Lane</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>{" "}
                  <div className="card">
                    <div className="card_main">
                      <h5>Freshers</h5>
                      <p>Finance</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse10.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Jacob Jones</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Freshers</h5>
                      <p>Finance</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse11.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Jacob Jones</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ===============================Закрытые================== */}
              <div className="cards">
                <header className="card_header">
                  <h4 className="card_header_weak">
                    Закрытые
                    <span className="point">
                      <TbPointFilled className="pointfilled" />
                    </span>
                    <span className="number">0</span>
                  </h4>
                </header>
                <div className="items">
                  <div className="addfiles">
                    <img src="./image/Add_Files.png" />
                    <p>Если есть подходящие заявки, перетащите их сюда 🤓</p>
                  </div>
                </div>
              </div>

              {/* ============================Архив======================== */}
              <div className="cards">
                <header className="card_header">
                  <h4 className="card_header_weak">
                    Архив
                    <span className="point">
                      <TbPointFilled className="pointfilled" />
                    </span>
                    <span className="number">3</span>
                  </h4>
                </header>
                <div className="items">
                  <div className="card">
                    <div className="card_main">
                      <h5>UX Architect</h5>
                      <p>Housekeeping management</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse12.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Guy Hawkins</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>{" "}
                  <div className="card">
                    <div className="card_main">
                      <h5>Human Resource</h5>
                      <p>Operations</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          182
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse13.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Annette Black</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>{" "}
                  <div className="card">
                    <div className="card_main">
                      <h5>Python Developer</h5>
                      <p>Restaurant Management</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse7.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Esther Howard</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>{" "}
                </div>
              </div>

              {/* ============================Удаленные==================== */}
              <div className="cards">
                <header className="card_header">
                  <h4 className="card_header_weak">
                    Удаленные
                    <span className="point">
                      <TbPointFilled className="pointfilled" />
                    </span>
                    <span className="number">8</span>
                  </h4>
                </header>
                <div className="items">
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card_main">
                      <h5>Менеджер по продажам</h5>
                      <p>Отдел продаж</p>
                      <div className="in_priority">
                        <h6>В приоритете</h6>
                        <span className="user">
                          <FiUsers className="fiusers" />3
                        </span>
                        <span className="file">
                          <PiFileTextBold className="filetext" />
                          255
                        </span>
                      </div>
                      <div className="image">
                        <img src="./image/Ellipse1.png" />
                        <div className="rektor">
                          <h5>Рекруитер</h5>
                          <h4>Алексей Щербаков</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card_points">
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                      <TbPointFilled className="pointfilled" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Presentation;
