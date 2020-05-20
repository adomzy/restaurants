import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResults = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResults("$")} title="Cost Effective" />
      <ResultsList results={filterResults("$$")} title="Bit Pricier" />
      <ResultsList results={filterResults("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
