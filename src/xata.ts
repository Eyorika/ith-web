import { buildClient, BaseClientOptions, SchemaInference, XataRecord, Repository, XataRecordMetadata, JSONData, SelectedPick, Identifiable } from '@xata.io/client';

const tables = [
  {
    name: 'quotes',
    columns: [
      { name: 'name', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'company', type: 'string', notNull: false },
      { name: 'projectType', type: 'string' },
      { name: 'budget', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'status', type: 'string' },
      { name: 'createdAt', type: 'string' }
    ]
  }
] as const;

export type SchemaTables = typeof tables;
export type DatabaseSchema = SchemaInference<SchemaTables>;

export type QuoteRecord = DatabaseSchema['quotes'] & XataRecord;

export type DatabaseClient = Repository<DatabaseSchema> & XataRecord<any>;

const DatabaseClient = buildClient<DatabaseSchema>();

const defaultOptions = {
  databaseURL: process.env.XATA_DATABASE_URL,
  apiKey: process.env.XATA_API_KEY,
  branch: process.env.XATA_BRANCH || 'main'
};

export class XataClient extends DatabaseClient<DatabaseSchema> implements XataRecord<any> {
  constructor(options: BaseClientOptions = {}) {
    super({ ...defaultOptions, ...options }, tables);
  }

  xata: XataRecordMetadata = {
    version: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  getMetadata(): XataRecordMetadata {
    return this.xata;
  }

  toSerializable(): JSONData<any> {
    return {
      id: this.id || '',
      xata: this.xata
    };
  }

  async read<K extends string>(columns?: K[]): Promise<Readonly<SelectedPick<any, K[]>>> {
    const result = await super.read();
    return result as Readonly<SelectedPick<any, K[]>>;
  }

  async update(data: Partial<any>): Promise<this> {
    const result = await super.update(data);
    return result;
  }

  async delete(): Promise<void> {
    await super.delete();
  }

  build(): Record<string, any> {
    return {
      ...super.build(),
      xata: this.xata
    };
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};

export const xata = getXataClient();