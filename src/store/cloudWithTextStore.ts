import { observable, action } from 'mobx';

type StoreType = {
    textInCloud: string;
    setTextInCloud: (newText: string) => void;
};

const cloudWithTextStore: StoreType = observable({
    textInCloud: 'Murrrrr...',
    setTextInCloud: action(function(this: StoreType, newText:string) {
        this.textInCloud = newText;
    })
});

export default cloudWithTextStore;