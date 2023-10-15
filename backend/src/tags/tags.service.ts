import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";

import { Tag } from "./tags.model";

@Injectable()
export class TagsService {
    constructor(@InjectModel(Tag) private readonly tagModel: typeof Tag) {}

    public async getAllTags(): Promise<Tag[]> {
        const tags: Tag[] = await this.tagModel.findAll();

        return tags;
    }

    public async getTag(tagID: number): Promise<Tag> {
        const product: Tag = await this.tagModel.findOne({
            where: {
                id: tagID,
            },
        });

        return product;
    }

    public async createTag(createTagDto: CreateTagDto): Promise<Tag> {
        const tag: Tag = await this.tagModel.create(createTagDto);

        return tag;
    }

    public async updateTag(
        tagID: number,
        updateTagDto: UpdateTagDto,
    ): Promise<Tag> {
        const tag: Tag = await this.getTag(tagID);

        return await tag.update(updateTagDto);
    }

    public async removeTag(tagID: number): Promise<void> {
        const tag: Tag = await this.getTag(tagID);

        await tag.destroy();
    }
}
