"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const amenitiesList = [
  "Park",
  "School",
  "Playground",
  "Gym",
  "Pool",
  "Shopping Mall",
  "Green Spaces",
  "Renewable Energy",
  "Recycling Facilities",
];

const locations = ["Nairobi", "Westlands", "Karen", "Thika", "Naivasha"];

interface FilterBarProps {
  initialFilters: {
    amenities?: string[];
    location?: string[];
    minPrice?: string;
    maxPrice?: string;
  };
}

export default function CommunityFilterBar({
  initialFilters = {},
}: FilterBarProps) {
  const router = useRouter();
  const [showAmenitiesDropdown, setShowAmenitiesDropdown] =
    useState<boolean>(false);
  const [showLocationDropdown, setShowLocationDropdown] =
    useState<boolean>(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState<boolean>(false);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    initialFilters.amenities || []
  );
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    initialFilters.location || []
  );
  const [minPrice, setMinPrice] = useState<string>(
    initialFilters.minPrice || ""
  );
  const [maxPrice, setMaxPrice] = useState<string>(
    initialFilters.maxPrice || ""
  );

  const toggleSelection = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setList(
      list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value]
    );
  };

  const formatSelections = (selections: string[], defaultText: string) => {
    return selections.length > 0 ? selections.join(", ") : defaultText;
  };

  const handleSearch = () => {
    const query: { [key: string]: string | undefined } = {};

    if (selectedAmenities.length > 0) {
      query.amenities = selectedAmenities.join(",");
    }
    if (selectedLocations.length > 0) {
      query.location = selectedLocations.join(",");
    }
    if (minPrice) {
      query.minPrice = minPrice;
    }
    if (maxPrice) {
      query.maxPrice = maxPrice;
    }

    router.push({
      pathname: "/communities",
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
            onClick={() => setShowAmenitiesDropdown(!showAmenitiesDropdown)}
          >
            <span>Amenities</span>
            <span className={styles.chevron}>
              {showAmenitiesDropdown ? "▲" : "▼"}
            </span>
          </div>
          <div className={styles.selection}>
            {formatSelections(selectedAmenities, "Any")}
          </div>
          {showAmenitiesDropdown && (
            <div className={styles.dropdownContent}>
              {amenitiesList.map((amenity) => (
                <label key={amenity} className={styles.dropdownItem}>
                  <input
                    type="checkbox"
                    value={amenity}
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() =>
                      toggleSelection(
                        selectedAmenities,
                        setSelectedAmenities,
                        amenity
                      )
                    }
                  />
                  {amenity}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className={styles.separator}></div>
        <div className={styles.filterItem}>
          <div
            className={styles.label}
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          >
            <span>Location</span>
            <span className={styles.chevron}>
              {showLocationDropdown ? "▲" : "▼"}
            </span>
          </div>
          <div className={styles.selection}>
            {formatSelections(selectedLocations, "Any")}
          </div>
          {showLocationDropdown && (
            <div className={styles.dropdownContent}>
              {locations.map((location) => (
                <label key={location} className={styles.dropdownItem}>
                  <input
                    type="checkbox"
                    value={location}
                    checked={selectedLocations.includes(location)}
                    onChange={() =>
                      toggleSelection(
                        selectedLocations,
                        setSelectedLocations,
                        location
                      )
                    }
                  />
                  {location}
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
