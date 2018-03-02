import fileinput
import nltk
import itertools


def extract_entity_names(t):
    entity_names = []

    if hasattr(t, 'label') and t.label:
        if t.label == 'NN':
            entity_names.append(" ".join([child[0]] for child in t))
        else:
            for child in t:
                entity_names.extend(extract_entity_names(child))

    return entity_names


def filter_NNP(sentences):

    return [chunk[0] for chunk in set(list(itertools.chain(*sentences))) if chunk[1] == "NNP"]


def readFile(file):
    tags = list()

    with open(file, 'r', encoding="utf8") as f:
        text = f.read()
    # with fileinput.input(files=(file), ) as book:
    #    for line in book:
    #        text += line

        sentences = nltk.sent_tokenize(text)
        tokenized_sentences = [nltk.word_tokenize(
            sentence) for sentence in sentences]
        tagged_sentences = [nltk.pos_tag(sentence)
                            for sentence in tokenized_sentences]

        return filter_NNP(tagged_sentences)
