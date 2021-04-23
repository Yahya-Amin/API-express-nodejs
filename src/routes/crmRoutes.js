import { runInNewContext } from "vm";
import { 
    addNewContact, 
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request de: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
        
    
    .post(addNewContact);
    
    app.route('/contact/:contactId')
        // contact avec ID
        .get(getContactWithID)

        // mise à jour contact
        .put(updateContact)
        
        // supprimer contact    
        .delete(deleteContact);
}

export default routes;
