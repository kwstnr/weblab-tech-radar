import { DbContext } from './db-context';

export class DbContextFactory {
  private dbContext?: DbContext;

  constructor(private connectionString: string) {}

  async getDbContext(): Promise<DbContext> {
    if (!this.dbContext) {
      this.dbContext = new DbContext(this.connectionString);
      await this.dbContext.init();
    }

    return this.dbContext;
  }
}
