/**
 * 1. create firebase project
 * 2. create web app
 * 3. npm i firebase
 * 4. save firebase config and export default app
 * 5. Build > Authentication > get started > enable sign in method
 * 6. create sign up & login route
 *
 */

/**
 * CONTEXT
 * 
 * 1. create a context provider [folder: src > providers]
 * 2. create a context [& must export] & set provider [createContext(null)]
 * 3. set the children props
 * 4. set context value
 * 5. set the provider [in global] [set as object & get the same form]
 * 6. pass the value through children
 * 7. getAuth(app)
 * 8. const [user, setUser] = useState(null);
 * 9. create createUser function [must need return] & pass it through authInfo value
 * 10. receive this value & use context [createUser, signIn, logOut...]
 * 11. reset error 
 * 12. set Observer [observer user auth state ==> use useEffect()]=> manage user
 *      [
 *           // observer user auth state
                    useEffect( () => {
                        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                            setUser(currentUser)
                        });
                        
                        // stop observing while unmounting
                        return () => {
                            return unsubscribe();
                        }
                    }, [])
 *      ]
 * 
*/


/**
 * PRIVATE ROUTE
 * 
 * 1. create routes folder in src [src > routes]
 * 2. routes > PrivateRoute.jsx
 * 3. params=> {children}
 * 4. import user from contest & set condition in user
 * 5. handle auto loading
 * 6. redirect
 * 
*/

/**
 * go to one route to another invisibly, use navigate
 * 
*/


/**
 *  HOSTING
 * --------------------
 * One time per computer
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 
 * 
*/
