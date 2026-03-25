import { Product } from './product.interface';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

findAll() {
    const filePath = join(process.cwd(), 'data', 'products.json');
    const raw = readFileSync(filePath, 'utf-8');
    const missions = JSON.parse(raw) as unknown as Product[];
}