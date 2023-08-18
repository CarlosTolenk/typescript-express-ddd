export interface TypeOrmConfigBase {
    database: string;
    target: 'production' | 'development' | 'test'
}

export interface TypeOrmConfig extends TypeOrmConfigBase {
    host: string;
    port: number;
    username: string;
    password: string;
}
