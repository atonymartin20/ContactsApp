exports.seed = function(knex, Promise) {
    return knex('contacts').insert ([
        {
            firstName: 'Kimi',
            lastName: 'Raikkonen',
            phonenumber: '1979101740',
            email: 'KRaikkonen@alfa.com',
            notes: 'Best Driver Ever',
        },
        {
            firstName: 'Lando',
            lastName: 'Norris',
            phonenumber: '1999111320',
            email: 'LNorris@McLaren.com',
            notes: 'I\'m moving up and down, side to side, like a roller coaster.',
        },
        {
            firstName: 'Nico',
            lastName: 'Hulkenberg',
            phonenumber: '1987081932',
            email: 'NHulkenberg@Renault.com',
            notes: 'Looking for a job on a proper F1 team.',
        },
    ]);
};