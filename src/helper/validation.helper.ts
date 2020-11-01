export default class Validator {
    
    static login = (must = true) => ({
        emaill: {
          presence: must,
          type: "string",
        },
        password: {
          presence: must,
          type: "string",
          length: { minimum: 4 },
        },
      });
    
    static addStudent = (must = true) => ({
        firstName: {
          presence: must,
          type: "string"
        },
        lastName: {
          presence: must,
          type: "string"
        },
        age: {
            presence: must,
            type: "number",
        },
        phone: {
            presence: must,
            type: "string",
            length: { maximum: 15, minimum: 10 }
        },
        email: {
          type: "string",
          length: { minimum: 6 }
        }
      });

    static addTeacher = (must = true) => ({
        name: {
          presence: must,
          type: "string",
        },
        // phone: {
        //     presence: must,
        //     type: "string",
        //     length: { maximum: 15, minimum: 10 },
        // },
        emaill: {
          presence: must,
          type: "string",
          length: { minimum: 6 },
        },
        password: {
          presence: must,
          type: "string",
          length: { minimum: 4 },
        },
      });
    
}