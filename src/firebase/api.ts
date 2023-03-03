import { v4 } from 'uuid';
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { DocumentData, getFirestore, updateDoc, getDoc, collection, doc, setDoc, getDocs, arrayUnion } from "firebase/firestore";
import { CategoryType, ItemsType, UserType } from "../types/types";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useAPI = {
    fbPopup: async () => {
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        
        return await signInWithPopup(auth, provider);
    },
    addUser: async (user: UserType) => {
        await setDoc(doc(db, 'users', user.id), {
            id: user.id,
            name: user.name,
            image: user.image,
            finance: user.finance
        });                
    },
    getCategories: async () => {
        let cats: CategoryType[] = [];
        const getCategories = await getDocs(collection(db, 'categories'));
        
        getCategories.forEach(doc => {
            cats.push(doc.data());
        });
        
        return cats;
    },
    addItem: async (user: UserType, item: ItemsType) => {           
        const docItem = await getDoc(doc(db, 'finances', user.finance));

        if(docItem.exists()) {
            await updateDoc(doc(db, 'finances', user.finance), {
                items: arrayUnion({
                    id: v4(),
                    title: item.title,
                    category: item.category,
                    value: item.value,
                    date: item.date,
                    expense: item.category === 'salary' ? false : true
                })
            });
        } else {
            await setDoc(doc(db, 'finances', user.finance), {
                items: [{
                    id: v4(),
                    title: item.title,
                    category: item.category,
                    value: item.value,
                    date: item.date,
                    expense: item.category === 'salary' ? false : true
                }]
            });
        }        
    },
    getListItems: async (finance: string) => {
        const docItem = await getDoc(doc(db, 'finances', finance));        
        const newList: ItemsType[] = [];
        
        if(docItem) {
            const list = docItem.data() as DocumentData;
            
            if(list.items as ItemsType[]) {
                for(let i in list.items) {
                    newList.push({
                        id: list.items[i].id,
                        title: list.items[i].title,
                        category: list.items[i].category,
                        value: list.items[i].value,
                        date: new Date( list.items[i].date.seconds * 1000 ),
                        expense: list.items[i].expense
                    });
                }
            }            
        }

        return newList;
    },
    delItem: async (finance: string, idItem: string) => {
        const docItem = await getDoc(doc(db, 'finances', finance));        
        let newList: ItemsType[] = [];
        
        if(docItem) {
            const list = docItem.data() as DocumentData;            
            newList = list.items.filter((i: ItemsType) => i.id !== idItem);               
        }

        await updateDoc(doc(db, 'finances', finance), { items: newList });
    },
    updateItem: async (finance: string, idItem: string, title: string, value: any, category: string) => {
        const docItem = await getDoc(doc(db, 'finances', finance));        

        if(docItem) {
            const list = docItem.data() as DocumentData;
            const indexItem = list.items.findIndex((i: ItemsType) => i.id === idItem);

            if(indexItem !== -1) {
                list.items[indexItem].title = title;
                list.items[indexItem].value = value;
                list.items[indexItem].category = category;
            }            

            await updateDoc(doc(db, 'finances', finance), { items: list.items });
        }

    }
}