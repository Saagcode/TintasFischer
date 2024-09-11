import "./header.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Fischer_logo from "../../../public/icons/TINTAS_FISCHER_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { userSearch } from "../../../data/index.jsx";
import "../media-queries/header_media-queries.css";

function Header() {
  useEffect(() => {
    Aos.init();
  });
  const navigate = useNavigate();

  const handleSocialMedia = (link) => {
    window.open(link);
  };

  const handleHelp = () => {
    window.open(`https://beacons.ai/tintasfischer`);
  };

  const handleWhatsapp = (phoneNumber, message) => {
    window.open(
      `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`
    );
  };

  const [showHistory, setShowHistory] = useState(false);

  const handleShowHistory = () => {
    if (search === "") {
      setShowHistory(true);
      setShowSearchList(true);
    } else {
      setShowHistory(false);
      setShowSearchList(false);
    }
  };
  const handleCloseHistory = () => {
    setShowHistory(false);
  };

  const [search, setSearch] = useState("");
  const [showSearchList, setShowSearchList] = useState(false);

  const [filteredResults, setFilteredResults] = useState([]);

  const dellSearch = () => {
    setSearch("");
    setShowHistory(false);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (search === "Localização de nossas lojas") {
        navigate("/sobre");
      } else if (search === "Tintas disponiveis") {
        navigate("/produtos");
      } else if (search === "Cores em que trabalhamos") {
        navigate("/cores-inspiracoes");
      } else if (search === "Disponibilidade de pintores") {
        navigate("/assistencia");
      } else if (search === "Horario de funcionamento") {
        navigate("/sobre");
      } else if (search === "Informacoes de contato") {
        navigate("/contato");
      } else if (search === "Aplicações do produto") {
        navigate("/home");
      }
      addToSearchHistory(search);
      setSearch("");
    }
  };

  const [dataHistory, setDataHistory] = useState([]);
  const loadSearchHistory = () => {
    const searchHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setDataHistory(searchHistory);
  };

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const addToSearchHistory = (newSearch) => {
    const searchHistory = [...dataHistory];
    searchHistory.push(newSearch);
    const maxHistoryLength = 5;
    if (searchHistory.length > maxHistoryLength) {
      searchHistory.shift();
    }
    if (newSearch.trim() === "") {
      return;
    }
    setDataHistory(searchHistory);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  };
  const addToHistory = () => {
    setSearch(searchText);
    addToSearchHistory(search);
  };
  const handleSearchSubmit = () => {
    if (search === "Localização de nossas lojas") {
      navigate("/sobre");
    } else if (search === "Tintas disponiveis") {
      navigate("/produtos");
    } else if (search === "Cores em que trabalhamos") {
      navigate("/cores-inspiracoes");
    } else if (search === "Disponibilidade de pintores") {
      navigate("/assistencia");
    } else if (search === "Horario de funcionamento") {
      navigate("/sobre");
    } else if (search === "Informacoes de contato") {
      navigate("/contato");
    } else if (search === "Aplicações do produto") {
      navigate("/home");
    }
    //colocar a variavel logica do filter aqui
    addToSearchHistory(search); //historico aqui
    setSearch("");
  };

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase(); // Convertendo o valor para minúsculas

    const filteredResults = userSearch.filter((researches) =>
      researches.msg.toLowerCase().includes(inputValue)
    );
    setFilteredResults(filteredResults);
    if (inputValue === "") {
      setShowHistory(true);
    } else {
      setShowHistory(false);
    }
    setSearch(inputValue);
  };

  const handleSearchItemClick = (searchText) => {
    setSearch(searchText);
    setShowSearchList(false);
  };

  const [showGrid1, setShowGrid1] = useState(true);
  const [showGrid4, setShowGrid4] = useState(false);
  const toggleGrid1 = () => {
    setShowGrid1(!showGrid1);
    setShowGrid4(!showGrid4);
  };

  const toggleGrid4 = () => {
    setShowGrid1(!showGrid1);
    setShowGrid4(!showGrid4);
  };

  const handleArrowClick = (event) => {
    event.stopPropagation(); // cria uma funcao que impede do click na imagem se propagar para o botao.
  };

  const [featureMenu, setFeatureMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const animation = () => {
    if (scroll === true) {
      setScroll(false);
      setFeatureMenu(false);
    } else {
      setScroll(true);
      setFeatureMenu(true);
    }
  };

  const [currentGrid, setCurrentGrid] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGrid(currentGrid === 4 ? 1 : currentGrid + 1);
      setShowGrid1(showGrid1);
      setShowGrid4(showGrid4);
      setCurrentGrid(currentGrid === 1 ? 4 : currentGrid + 1);
      setShowGrid1(!showGrid1);
      setShowGrid4(!showGrid4);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <section className="section-container_header">
        <div className="section-banner_info">
          <h2>
            Santa Catarina |
            <span className="text_shops">
              {" "}
              <Link to="/sobre">Lojas</Link>
            </span>
          </h2>
          <h2>
            Compre por ligação (Somente Vendas):
            <span
              className="text_phone"
              onClick={() => {
                handleWhatsapp("+5547991773884");
              }}
            >
              47 9 9177-3884
            </span>
          </h2>
          <h2
            className="text_help"
            onClick={() => {
              handleHelp();
            }}
          >
            Precisa de Ajuda?
          </h2>
        </div>
        <div className="section-container_header_content">
          <div className="tintasfischer-logo">
            <Link to="/home">
              <img src={Fischer_logo} alt="TintasFischer-logo" />
            </Link>
          </div>
          <div className="section-header_content">
            <button
              className="btn_search-bar_search"
              onClick={handleSearchSubmit}
            >
              <span className="fa-solid fa-magnifying-glass" />
            </button>
            <input
              type="text"
              className={search ? "search-bar" : "search-bar"}
              maxLength={100}
              value={search}
              placeholder="O que você procura na Tintas Fischer?"
              onChange={handleSearchInputChange}
              onKeyDown={handleEnterPress}
              onClick={handleShowHistory}
              onMouseLeave={handleCloseHistory}
            />
            <button className="btn_search-bar_cancel" onClick={dellSearch}>
              <span className="fa-solid fa-xmark" />
            </button>
            {showHistory && (
              <>
                <div className="search-bar_expanded_container">
                  <div
                    className="search-bar_expanded"
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-offset="50"
                  >
                    <h1 style={{ color: "black" }}>
                      <h1>Historico de pesquisa:</h1>
                      {dataHistory.map((item, index) => (
                        <div key={index}>{item}</div>
                      ))}
                    </h1>
                  </div>
                </div>
              </>
            )}
            {search && showSearchList && (
              <>
                <div className="search-bar_expanded_container">
                  <div
                    className="search-bar_expanded"
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-offset="50"
                  >
                    <h1 style={{ color: "black" }}>
                      <ul style={{ listStyle: "none" }} onClick={addToHistory}>
                        {filteredResults &&
                          filteredResults.map((researches) => (
                            <li key={researches.id}>
                              <p
                                onClick={() =>
                                  handleSearchItemClick(researches.msg)
                                }
                              >
                                {researches.msg}
                              </p>
                            </li>
                          ))}
                      </ul>
                    </h1>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="section_socialmedia">
            <span
              className="fa-brands fa-instagram"
              onClick={() => {
                handleSocialMedia("https://www.instagram.com/tintasfischer/");
              }}
            />
            <span
              className="fa-brands fa-square-facebook"
              onClick={() => {
                handleSocialMedia(
                  "https://www.facebook.com/lojatintasfischer/about/"
                );
              }}
            />
          </div>
        </div>
        <section className="section-container_menu">
          <div className="section-menu_content">
            <span
              className={scroll ? "" : "fa-solid fa-bars"}
              onClick={animation}
            />
            {featureMenu && (
              <span
                style={{ transition: "1s" }}
                className="fa-solid fa-bars"
                id="bar-emote"
                onClick={animation}
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-duration="1000"
              />
            )}
            {scroll && (
              <ul
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="1500"
              >
                <Link to="/home" className="Link">
                  <li className="li_1">Home</li>
                </Link>
                <li className="li_2">
                  <Link to="/sobre" className="link">
                    Sobre
                  </Link>
                </li>
                <li className="li_3">
                  <Link to="/produtos" className="link">
                    Produtos
                  </Link>
                </li>
                <li className="li_4">
                  <Link to="/cores-inspiracoes" className="link">
                    Cores e Inspirações
                  </Link>
                </li>
                <li className="li_5">
                  <Link to="/assistencia" className="link">
                    Assistência
                  </Link>
                </li>
                <li className="li_6">
                  <Link to="/contato" className="link_contact">
                    Contato
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </section>
        <section className="section-container_contact">
          <div className="section-arrow_1" onClick={handleArrowClick}>
            <span className="fa-solid fa-circle-left" onClick={toggleGrid1} />
          </div>
          {showGrid1 && (
            <div
              className={currentGrid === 1 ? "section-contact_content_1" : ""}
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{
                backgroundImage: "var(--background-section-contact_1)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                handleWhatsapp(
                  "+5547992925651",
                  "Olá, gostaria de realizar um projeto de cores da minha casa!"
                );
              }}
            >
              <h1>Projeção de Cores</h1>
            </div>
          )}
          <div
            className="section-contact_content_2"
            onClick={() => {
              handleWhatsapp(
                "+5547991177303",
                "Olá, gostaria de uma visita técnica pois estou com problemas ou dúvidas!"
              );
            }}
          >
            <h1>Metragem</h1>
          </div>
          <div
            className="section-contact_content_3"
            onClick={() => {
              handleWhatsapp(
                "+5547991282123",
                "Olá, gostaria que pudessem orçar conforme a metragem da minha obra!"
              );
            }}
          >
            <h1>Assistência Técnica</h1>
          </div>
          {showGrid4 && (
            <div
              className={currentGrid === 4 ? "section-contact_content_4" : ""}
              data-aos="fade-left"
              data-aos-duration="1000"
              style={{
                backgroundImage: "var(--background-section-contact_4)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                handleWhatsapp(
                  "+5547991773890",
                  "Olá, sou síndico do meu prédio e gostaria de marcar uma reunião."
                );
              }}
            >
              <h1>Repintura Predial</h1>
            </div>
          )}
          <div className="section-arrow_2" onClick={handleArrowClick}>
            <span className="fa-solid fa-circle-right" onClick={toggleGrid4} />
          </div>
        </section>
      </section>
    </>
  );
}
export default Header;
