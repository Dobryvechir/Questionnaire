export interface TranslationContainer {
    pl: string;
    de: string;
    ua: string;
}

export interface DirItem {
    id?: string;
    name?: string;
    translation?: TranslationContainer;
    picture?: string;
    level?: string;
    path?: string;
}

export interface StoryItem {
    id: string;
}

export interface DirTree {
   dir: DirItem[];
   story: StoryItem[];
}