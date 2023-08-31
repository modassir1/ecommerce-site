import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';
const myState = (props) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = "rgb(17,24,39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }
    const [loading, setLoading] = useState(false);



    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    })
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("All fields are required");
        }
        const productRef = collection(fireDB, 'products');
        setLoading(true)

        //   i am creating refrences to add product into firebase
        try {
            // it takes two parameters first database name and collection name 
            await addDoc(productRef, products);
            toast.success("Add product successfully");
            setTimeout(() => {
                window.location.href = '/dashbord'
            }, 800)
            getProductData();
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    // /gettin product data ////

    const [product, setproduct] = useState([]);
    const getProductData = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id })
                });
                setproduct(productArray);
                setLoading(false);
            })
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductData();
    }, [])

    const edithandle = (item) => {
        setProducts(item);
    }
    const updateProduct = async () => {
        setLoading(true)
        try {
            await setDoc(doc(fireDB, 'products', products.id), products);
            toast.success("Product updated Successfully");
            setTimeout(() => {
                window.location.href = "/dashbord";
            }, 800);
            getProductData();
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const deleteProduct = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', item.id));
            toast.success("Products delete successfully");
            getProductData();
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);

        }
    }


    const [user, setUser] = useState([]);
    const getUserData = async () => {
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "users"));
            const userArray = [];
            result.forEach((doc) => {
                userArray.push(doc.data());
                setLoading(false)
            });
            setUser(userArray);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        getProductData();
        getUserData()
    }, []);

    const [searchKey, setSearchKey] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterPrice, setFilterPrice] = useState("");

    return (
        <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product, edithandle, updateProduct, deleteProduct, user, searchKey, setSearchKey, filterType, setFilterType, filterPrice, setFilterPrice }}>
            {props.children}
        </MyContext.Provider>
    )

}
export default myState