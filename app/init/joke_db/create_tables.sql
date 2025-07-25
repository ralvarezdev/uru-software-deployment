CREATE TABLE IF NOT EXISTS jokes (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
);

CREATE TABLE IF NOT EXISTS joke_votes (
    id BIGSERIAL PRIMARY KEY,
    joke_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    vote SMALLINT NOT NULL CHECK (vote IN (-1, 1)),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,

    FOREIGN KEY (joke_id) REFERENCES jokes(id) ON DELETE CASCADE,
);

CREATE UNIQUE INDEX IF NOT EXISTS joke_votes_unique_joke_user
ON joke_votes (joke_id, user_id);

CREATE TABLE IF NOT EXISTS joke_comments (
    id BIGSERIAL PRIMARY KEY,
    joke_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,

    FOREIGN KEY (joke_id) REFERENCES jokes(id) ON DELETE CASCADE,
);
