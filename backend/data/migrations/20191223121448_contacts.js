exports.up = function (knex, Promise) {
    return knex.schema.createTable('contacts', contacts => {
        contacts.increments();
        contacts.string('firstName', 50);
        contacts.string('lastName', 50);
        contacts.string('phoneNumber', 50);
        contacts.string('email', 100);
        contacts.string('notes', 4000);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('contacts');
};
