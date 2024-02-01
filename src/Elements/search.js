import axios from "axios";
import Studentdata from "./Home-page";
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
const baseURL = "http://localhost:3000/All_Students";


function MySearch() {
    searchDataInJSONFile(jsonFileURL, termToSearch);
    return (        
 <>

 

 </>

    );
}

export default MySearch;
async function searchDataInJSONFile(url, searchTerm) {
    try {
      const response = await axios.get(url); // Fetch JSON file data using Axios
  
      if (response.status === 200) {
        const jsonData = response.data;
  
        // Perform search on JSON data based on searchTerm
        const searchResults = jsonData.filter(item =>
          Object.values(item).some(value =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
  
        // Display search results
        if (searchResults.length > 0) {
          console.log('Search results:', searchResults);
          // You can do whatever you want with the search results here
        } else {
          console.log('No results found for the search term:', searchTerm);
        }
      } else {
        console.log('Error: Unable to fetch data from JSON file');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Example usage:
  // Replace 'url' with your JSON file URL and 'searchTerm' with the term to search
  const jsonFileURL = 'https://example.com/data.json'; // Replace with your JSON file URL
  const termToSearch = 'searchTerm'; // Replace with the term you want to search
  