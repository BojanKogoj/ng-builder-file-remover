import { createBuilder, BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import * as fs from 'fs-extra';

export interface Options {
  files: string[];
}

export function _fileRemover(options: Options, context: BuilderContext): Promise<BuilderOutput> {
  return new Promise((resolve: any) => {

    const files = options.files;

    if (!files.length) {
      context.logger.info('No files to remove');
      resolve({ success: true });
    }

    context.logger.info('Starting file removing');

    Promise.all(files.map((fileName: string) => {
      return fs.remove(fileName)
        .then(() => {
          context.logger.info(`Deleted ${fileName}`);
          return fileName;
        })
        .catch((error) => {
          context.logger.warn(`❌ Failed to remove ${fileName}`);
          context.logger.warn(error.message);
        });
    }))
      .then(() => {
        context.logger.info('✔ Removing files finished successfully');
        resolve({ success: true });
      })
      .catch((err) => {
        context.logger.fatal('Removing failed. More below:');
        context.logger.fatal(err);
        resolve({ success: false });
      });
  });
}

export default createBuilder<Options & JsonObject>(_fileRemover);
