"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const designStyles = [
  "Minimalist",
  "Classic",
  "Scandinavian",
  "Industrial",
  "Rustic",
];

const finishings = ["High Gloss", "Minimalist", "Vintage", "Luxury", "Wooden", "Rustic"];

interface FilterBarProps {
  initialFilters: {
    styles?: string[];
    finishings?: string[];
    minPrice?: string;
    maxPrice?: string;
  };
}

export default function DesignFilterBar({
  initialFilters = {},
}: FilterBarProps) {
  const router = useRouter();
  const [showStyleDropdown, setShowStyleDropdown] = useState<boolean>(false);
  const [showFinishingDropdown, setShowFinishingDropdown] = useState<boolean>(
    false
  );
  const [showPriceDropdown, setShowPriceDropdown] = useState<boolean>(false);
  const [selectedStyles, setSelectedStyles] = useState<string[]>(
    initialFilters.styles || []
  );
  const [selectedFinishings, setSelectedFinishings] = useState<string[]>(
    initialFilters.finishings || []
  );
  const [minPrice, setMinPrice] = useState<string>(
    initialFilters.minPrice || ""
  );
  const [maxPrice, setMaxPrice] = useState<string>(
    initialFilters.maxPrice || ""
  );

  const toggleSelection = (
    list: any[],
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

  const handleSearch = () => {
    const query: { [key: string]: string | number | undefined } = {};

    if (selectedStyles.length > 0) {
      query.styles = selectedStyles.join(",");
    }
    if (selectedFinishings.length > 0) {
      query.finishings = selectedFinishings.join(",");
    }
    if (minPrice) {
      query.minPrice = minPrice;
    }
    if (maxPrice) {
      query.maxPrice = maxPrice;
    }

    router.push({
      pathname: "/interiors",
      query,
    });
  };

  const formatWithCommas = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value.replace(/,/g, "");
    setMinPrice(formattedValue);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value.replace(/,/g, "");
    setMaxPrice(formattedValue);
  };

  return (
    <div className={styles.filterBarWrapper}>
      <div className={styles.filterBar}>
        <div className={styles.filterItem}>
          <div
            className={styles.label}
            onClick={() => setShowStyleDropdown(!showStyleDropdown)}
          >
            <span>Style</span>
            <span className={styles.chevron}>
              {showStyleDropdown ? "▲" : "▼"}
            </span>
          </div>
          <div className={styles.selection}>
            {formatSelections(selectedStyles, "Any")}
          </div>
          {showStyleDropdown && (
            <div className={styles.dropdownContent}>
              {designStyles.map((style) => (
                <label key={style} className={styles.dropdownItem}>
                  <input
                    type="checkbox"
                    value={style}
                    checked={selectedStyles.includes(style)}
                    onChange={() =>
                      toggleSelection(selectedStyles, setSelectedStyles, style)
                    }
                  />
                  {style}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className={styles.separator}></div>
        <div className={styles.filterItem}>
          <div
            className={styles.label}
            onClick={() => setShowFinishingDropdown(!showFinishingDropdown)}
          >
            <span>Finishing</span>
            <span className={styles.chevron}>
              {showFinishingDropdown ? "▲" : "▼"}
            </span>
          </div>
          <div className={styles.selection}>
            {formatSelections(selectedFinishings, "Any")}
          </div>
          {showFinishingDropdown && (
            <div className={styles.dropdownContent}>
              {finishings.map((finishing) => (
                <label key={finishing} className={styles.dropdownItem}>
                  <input
                    type="checkbox"
                    value={finishing}
                    checked={selectedFinishings.includes(finishing)}
                    onChange={() =>
                      toggleSelection(
                        selectedFinishings,
                        setSelectedFinishings,
                        finishing
                      )
                    }
                  />
                  {finishing}
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
            {formatWithCommas(minPrice) || "Any"} -{" "}
            {formatWithCommas(maxPrice) || "Any"}
          </div>
          {showPriceDropdown && (
            <div className={styles.dropdownContent}>
              <div className={styles.priceRange}>
                <label className={styles.label}>
                  From (KES)
                  <input
                    type="text"
                    placeholder="0"
                    value={formatWithCommas(minPrice)}
                    onChange={handleMinPriceChange}
                  />
                </label>
                <label className={styles.label}>
                  To (KES)
                  <input
                    type="text"
                    placeholder="10,000,000"
                    value={formatWithCommas(maxPrice)}
                    onChange={handleMaxPriceChange}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
        <div className={styles.separator}></div>
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
