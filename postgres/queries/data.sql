INSERT INTO
    roles (name)
VALUES
    ('owner'),
    ('administrator'),
    ('redactor'),
    ('moderator');

INSERT INTO
    users (
        first_name,
        last_name,
        email,
        password,
        email_verified,
        phone,
        about_me
    )
VALUES
    (
        'Шерхан',
        'Қантаев',
        'kansherhan@gmail.com',
        '$2a$05$.S0DKGr7yiOwkcEbFk/.XeUEH9LNzejdnU8LsPo3/RNpsl3Y8WkOC',
        true,
        '+7 (778) 146 85 04',
        'Fullstack Developer и Software Engineer'
    );

INSERT INTO
    user_roles (user_id, role_id)
VALUES
    (1, 1);

INSERT INTO
    tags (name)
VALUES
    ('Web'),
    ('Python');