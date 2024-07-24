"use client";
import { useState } from "react";
import styles from "./index.module.css";

const propertyTypes = ["Apartment", "Maisonette", "Bungalow"];
const bedrooms = [1, 2, 3, 4, 5];

export default function Index() {
  const [showPropertyTypeDropdown, setShowPropertyTypeDropdown] =
    useState<boolean>(false);
  const [showBedroomsDropdown, setShowBedroomsDropdown] =
    useState<boolean>(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState<boolean>(false);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(
    []
  );
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const toggleSelection = (
    list: string[] | number[],
    setList: Function,
    value: string | number
  ) => {
    setList(
      list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value]
    );
  };

  const formatSelections = (
    selections: (string | number)[],
    defaultText: string
  ) => {
    return selections.length > 0 ? selections.join(", ") : defaultText;
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterItem}>
        <div
          className={styles.label}
          onClick={() => setShowPropertyTypeDropdown(!showPropertyTypeDropdown)}
        >
          <span>Property Type</span>
          <span className={styles.chevron}>
            {showPropertyTypeDropdown ? "▲" : "▼"}
          </span>
        </div>
        <div className={styles.selection}>
          {formatSelections(selectedPropertyTypes, "Any")}
        </div>
        {showPropertyTypeDropdown && (
          <div className={styles.dropdownContent}>
            {propertyTypes.map((type) => (
              <label key={type} className={styles.dropdownItem}>
                <input
                  type="checkbox"
                  value={type}
                  checked={selectedPropertyTypes.includes(type)}
                  onChange={() =>
                    toggleSelection(
                      selectedPropertyTypes,
                      setSelectedPropertyTypes,
                      type
                    )
                  }
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.filterItem}>
        <div
          className={styles.label}
          onClick={() => setShowBedroomsDropdown(!showBedroomsDropdown)}
        >
          <span>Bedrooms</span>
          <span className={styles.chevron}>
            {showBedroomsDropdown ? "▲" : "▼"}
          </span>
        </div>
        <div className={styles.selection}>
          {formatSelections(selectedBedrooms, "Any")}
        </div>
        {showBedroomsDropdown && (
          <div className={styles.dropdownContent}>
            {bedrooms.map((bedroom) => (
              <label key={bedroom} className={styles.dropdownItem}>
                <input
                  type="checkbox"
                  value={bedroom}
                  checked={selectedBedrooms.includes(bedroom)}
                  onChange={() =>
                    toggleSelection(
                      selectedBedrooms,
                      setSelectedBedrooms,
                      bedroom
                    )
                  }
                />
                {bedroom} Bedroom{bedroom > 1 ? "s" : ""}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.filterItem}>
        <div
          className={styles.label}
          onClick={() => setShowPriceDropdown(!showPriceDropdown)}
        >
          <span>Price Range</span>
          <span className={styles.chevron}>
            {showPriceDropdown ? "▲" : "▼"}
          </span>
        </div>
        <div className={styles.selection}>
          {minPrice || "Any"} - {maxPrice || "Any"}
        </div>
        {showPriceDropdown && (
          <div className={styles.dropdownContent}>
            <div className={styles.priceRange}>
              <label>
                From:
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </label>
              <label>
                To:
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </label>
            </div>
          </div>
        )}
      </div>
      <div className={styles.separator}></div>
      <button className={styles.searchButton}>Search</button>
    </div>
  );
}
