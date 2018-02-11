# Codebook

- in the collection `codebook`

## Word

- We make one of these for every `word` we translate. 
- There may be many words translated to the same `translation`


    {
        word: "bad",
        translation_id: "ungood"
    }


## Translation

- `translation` objects may have other properties relating them to each other


    {
        translation: "ungood",
        root: "good"
    }

    {
        translation: "good"
    }

# Documents

- in the collection `documents`

## Document

- The source `document` does not change
- Therefore it's okay to make a static arrays of child nodes for its hierarchy


    {
        document: "1984",
        chapters: ["1984 1","1984 2","1984 3"]
    }
    
    {
        chapter: "1984 1",
        paragraphs: ["1984 1 1","1984 1 2","1984 1 3"]
    }

Since we don't store individual sentences this is the smallest unit we store of the original text 

    {
        paragraph: "1984 1 1",
        text: "There's going to be a lot of text here. Hi everyone!"
    }
