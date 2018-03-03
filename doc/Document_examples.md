# Codebook

- in the collection `codebook`

## Word

- represents a word that appears in the original text
- This is the only object that gets used in rendering translation
- We make one of these for every `word` we translate. 
- There may be many words translated to the same `translation`


    {
        word: "bad",
        translation: "ungood",
    }


### with parts of speech

To do a proper translation, eventually a working engine would have to recognize the part of speech, 
because of some homographs:

"I had a bad thought"

    {
        word: "thought",
        part_of_speech: "noun",
        translation: "think",
    }

"I thought 2 + 2 was 4"

    {
        word: "thought",
        part_of_speech: "verb",
        verb_inflection: "past",
        translation: "thinked",
    }
 
"I like to read the Newspeak dictionary"
 
    {
        word: "read",
        part_of_speech: "verb",
        verb_inflection: "present",
        translation: "wordsee",
    }
 
 "I already read the Newspeak dictionary"
 
    {
        word: "read",
        part_of_speech: "verb",
        verb_inflection: "past",
        translation: "wordseed",
    }

## Translation

- represents a word that appears in the dictionary
- there is an instance for every valid word in the dictionary
- to help condense conjugations, each points to a "root" word, or is the "root" itself

- `translation` objects may have other properties relating them to each other

 
    {
        translation: "ungood",
        root: "good"
    }


    {
        translation: "good"
    }

# Documents

- in the collection `canon`

## Document

- The source `document` does not change
- Therefore it's okay to make a static arrays of child nodes for its hierarchy


    {
        document: "1984",
        chapters: ["1984/1",
                   "1984/2",
                   "1984/3"]
    }

- the chapters don't necessarily need to remember which document they are in 

    
    {
        chapter: "1984/1",
        paragraphs: ["1984/1/1","1984/1/2","1984/1/3"]
    }


- Since we don't store individual sentences this is the smallest unit we store of the original text 


    {
        paragraph: "1984/1/1",
        text: "There's going to be a lot of text here. Hi everyone!"
    }
