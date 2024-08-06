import {createContext,useReducer} from "react"
import axios from "axios";
import categoryReducer from "./CategoryReducer"
const initialState = {
    categories: [],
  };
  export const CategoryContext = createContext();
  export const CategoryContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoryReducer, initialState);
    const fetchCategories = async () => {
        try {
          const response = await axios.get("http://localhost:8001/api/v1/categories");
          dispatch({ type: "SET_CATEGORIES",categories: response.data.data });
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
    const addCategory = async (category) => {
        try {
          const response = await axios.post("http://localhost:8001/api/v1/categories", category);
          dispatch({ type: "ADD_CATEGORY", category: response.data.data });
        } catch (error) {
          console.error("Error adding category:", error);
        }
    };
    const editCategory = async (id, updatedCategory) => {
        try {
          const response = await axios.put(`http://localhost:8001/api/v1/categories/${id}`, updatedCategory);
          dispatch({ type: "EDIT_CATEGORY", category: response.data.data });
        } catch (error) {
          console.error("Error editing category:", error);
        }
      };
      const removeCategory = async (id) => {
        try {
          await axios.delete(`http://localhost:8001/api/v1/categories/${id}`);
          dispatch({ type: "REMOVE_CATEGORY", category: id });
        } catch (error) {
          console.error("Error removing category:", error);
        }
      };


    
   
  
    return (
      <CategoryContext.Provider
        value={{categories: state.categories,fetchCategories,addCategory,editCategory,removeCategory}}
      >
        {children}
      </CategoryContext.Provider>
    );
  };

  