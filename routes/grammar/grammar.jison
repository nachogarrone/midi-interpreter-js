"lex": {
        "rules": [
            ["\\s+", "/* skip whitespace */"],
            ["[a-f0-9]+", "return 'HEX';"]
        ]
    },

    "bnf": {
        "hex_strings" :[ "hex_strings HEX",
            "HEX" ]
    }
