describe("search(str) functionality check", () => {
    it ("should return the correct array", () => {
        expect(search("ap")).toContain("Apple");
        expect(search("e f")).toContain("Miracle fruit");
        expect(search("xyz")).toEqual([]);
    });
});

describe("searchHandler(e) functionality check", () => {
    it ("should set suggestions to blank if there is no input", () => {
        searchHandler();

        expect(suggestions.innerHTML).toBe("");
    });

    it ("should not set suggestions to blank if the input is part of a valid fruit name", () => {
        input.value = "a";
        searchHandler();

        expect(suggestions.innerHTML).not.toBe("");
    });

    it ("should not send suggestions an array of more than 5", () => {
        input.value = "a";
        searchHandler();

        expect(suggestions.childElementCount).toBeLessThanOrEqual(5);
    });

    afterEach (() => {
        input.value = "";
        suggestions.innerHTML = "";
    });
});

describe("showSuggestions(results, inputVal) functionality check", () => {
    it ("should correctly add 'Star fruit' with 'r f' boldded with inputs ['Star fruit'] and 'r f'", () => {
        showSuggestions(["Star fruit"],"r f");

        expect(suggestions.children[0].innerHTML).toBe("Sta<b>r f</b>ruit");
    });

    it ("should match the number of inputs in the array with outputs", () => {
        showSuggestions(["triangle", "quadrilateral", "pentagon"],"a");

        expect(suggestions.childElementCount).toBe(3);
    });

    afterEach (() => {
        suggestions.innerHTML = "";
    });
});

describe("toggleWingdings() functionality check", () => {
    it ("should change the button's innerHTML", () => {
        toggleWingdings();

        expect(wingdingsBtn.innerHTML).toBe("Good choice :)");

        toggleWingdings();

        expect(wingdingsBtn.innerHTML).toBe("Why? D:");
        
        wingdingsBtn.innerHTML = "Completely Necessary Wingdings Mode";
    });

    it ("should toggle the classes of input and searchContainer", () => {
        toggleWingdings();

        expect(input.classList.contains("wingdings-mode")).toBe(true);

        toggleWingdings();

        expect(input.classList.contains("wingdings-mode")).toBe(false);
        
        wingdingsBtn.innerHTML = "Completely Necessary Wingdings Mode";
    });
});
