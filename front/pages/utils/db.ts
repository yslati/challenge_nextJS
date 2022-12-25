import { Level } from 'level';    
 
var db = new Level<string, any>("mydb", { valueEncoding: 'json' });

export default db;
