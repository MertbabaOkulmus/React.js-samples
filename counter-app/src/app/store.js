import {configureStore} from "@reduxjs/toolkit"; 
import counterReducer from "../features/counter/counterSlice"
// reecuer a özellikler eklenir her bir özellik için eklenmek sorunda dır, örneğin filim uygulaması yaparken filim listesi diye bir özellğimiz varsa bunun reducer a eklenmesi gerekir
export default configureStore({
    reducer :{ 
        conunter:counterReducer,
        //posts:post post larımız olduğunu varsayarsak hemen reducer a post özellğini eklememiz gerek, sonra herbir özeeliğin action creater ları da olmak zorunda 
    }
})