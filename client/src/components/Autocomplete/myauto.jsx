import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { faL, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, SearchBar } from "../../pages/MedicalProducts/NavBAR";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AutoSearch = ({ funct, keyE, pro, set }) => {
  let navigate = useNavigate();
  const linkRefs = [];
  const keys = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
  };

  const handleNavigation = (e) => {
    switch (e.keyCode) {
      case keys.ENTER:
        if (focusIndex !== -1) {
          navigate({
            pathname: `/medproducts/${linkRefs[focusIndex].name.split(" ")[0]}`,
            search: `?id=${linkRefs[focusIndex]._id}`,
          });

       window.location.reload()
          updateDisplayResults(true);
          updateFocusIndex(-1);
        }

      case keys.UP:
        if (focusIndex > -1) {
          updateFocusIndex(focusIndex - 1);
        }
        break;
      case keys.DOWN:
        if (focusIndex < filteredResults.length - 1) {
          updateFocusIndex(focusIndex + 1);
        }
        break;
    }
  };

  const SearchResults = () => {
    return (
      <ul className="search-results">
        {searchResults.map((m, index) => ({
          /*
                 <li key={index}>
                        <div>{m.title}</div>
                    </li>
                */
        }))}
      </ul>
    );
  };

  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [filteredResults, updateFilteredResults] = useState([]);
  const [displayResults, updateDisplayResults] = useState(false);
  const [focusIndex, updateFocusIndex] = useState(-1);
  const [show, setShow] = useState(false);
  const productList = useSelector((state) => state.productList);

  const updateSearch = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      updateSearchTerm("");
      updateFilteredResults([]);
      setShow(false);
      funct("");
    } else {
      updateSearchTerm(e.target.value);

      funct(e.target.value);
    }
  };
  const hideAutoSuggest = (e) => {
    e.preventDefault();

    if (e.relatedTarget && e.relatedTarget.className === "autosuggest-link") {
      return;
    }
    setShow(false);
    updateDisplayResults(true);
    updateFocusIndex(-1);
  };

  const reload = () => {
    set(false);
    updateFilteredResults([]);
  };
  const showAutoSuggest = (e) => updateDisplayResults(false);
  useEffect(() => {
    updateFilteredResults([]);
    const getSearchResult = async () => {
      const searchResultsResponse = await productList.products.products;
      console.log(searchResultsResponse);

      updateFilteredResults(searchResultsResponse.slice(0, 4));
    };

    getSearchResult();

    if (searchTerm.length > 0) {
      setShow(true);
    }
  }, [pro, funct]);
  useEffect(() => {
    updateFilteredResults([]);
    setShow(false);
  }, []);
  return (
    <SearchBar style={{ zIndex: "9999" }}>
      <Input
        type="text"
        placeholder="Search .."
        onChange={updateSearch}
        onKeyDown={handleNavigation}
        onFocus={showAutoSuggest}
        onBlur={hideAutoSuggest}
        onKeyPress={(e) => keyE(e)}
      />

      <FontAwesomeIcon
        onClick={(e) => funct(searchTerm)}
        style={{
          cursor: "pointer",
          fontSize: "1rem",
          marginLeft: "9px",
          color: "#198b69",
        }}
        icon={faSearch}
      />
      <ul
        style={{
          display: `${show ? "block" : "none"}`,
          listStyle: "none",
          border: "1px solid  #e4e4e4",
          backgroundColor: "white",
          borderRadius: "7px",
        }}
        className="search-suggestions"
      >
        {!displayResults && searchTerm && (
          <li
            style={{ listStyle: "none", padding: "0px 8px" }}
            key="-1"
            className={focusIndex === -1 ? "active" : null}
          >{`Search for ${searchTerm}`}</li>
        )}
        {!displayResults &&
          filteredResults.map((m, index) => {
            linkRefs[index] = m;
            return (
              <li
                style={{
                  listStyle: "none",
                  listStyle: "none",
                  color: "black",
                  fontWeight: "500",
                  padding: "0px 8px",
                }}
                key={index}
                className={focusIndex === index ? "active" : null}
              >
                <Link
                  className="autosuggest-link"
                  onClick={reload}
                  to={`/medproducts/${m.name.split(" ")[0]}?id=${m._id}`}
                >
                  <p
                    style={{
                      padding: "4px 0px",
                      display: "block",
                      color: "black",
                    }}
                  >
                    {m.name}
                  </p>
                </Link>
              </li>
            );
          })}
      </ul>
    </SearchBar>
  );
};

export default AutoSearch;
