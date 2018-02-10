
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

## Document

- The source `document` does not change
- Therefore it's okay to make a static arrays of child nodes for its hierarchy


    {
        document: "1984",
        chapters: ["chapter 1","chapter 2","chapter 3"]
    }
    
    {
        chapter: "chapter 1",
        paragraphs: ["paragraph 1_01","paragraph 1_02","paragraph 1_03"]
    }

Since we don't store individual sentences this is the smallest unit we store of the original text 

    {
        paragraph: "paragraph 1_01",
        text: "There's going to be a lot of text here. Hi everyone!"
    }
