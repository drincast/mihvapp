import { extendObservable, computed } from 'mobx';

class StoreStates{
    constructor(){
        extendObservable(this, 
            {
                socials: undefined
            }
        );
    }

    setSocials(vSocials){
        //console.log('vSocials', vSocials);

        for (let i in vSocials) {
            for (let j in vSocials[i]){
                if (vSocials[i][j].hasOwnProperty('name')){
                    //console.log('name', vSocials[i][j]);
                }

                //console.log('vSocials[i][j]', vSocials[i][j]);
            }
        }
        this.socials = vSocials;
        //this.socials = JSON.stringify(vSocials);
        //console.log('this.socials', this.socials.blogspot);
    }

    getSocials(){
        return this.socials
    }
}

var objStoreStates = new StoreStates();

export default objStoreStates;