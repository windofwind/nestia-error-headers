import { Controller, Delete, Get, Headers, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { Base } from './schema/base.schema';
import { TypedHeaders, TypedParam } from '@nestia/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @summary 기본
   *
   * @tag app
   * @return {*}  {string}
   * @memberof AppController
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * @summary 테스트
   *
   * @tag app
   * @return {*}  {string}
   * @memberof AppController
   */
  @Get("/test")
  getTest(@Headers() headers: Base.headers): string {
    console.info(headers);
    return "hello";
  }

  /**
   * @summary 검색 테스트
   * @tag app
   * @param {Base.headers} headers
   * @param {string} id
   * @return {*}  {string}
   * @memberof AppController
   */
  @Get("/search/:id")
  getSearch(
    @Headers() headers: Base.headers,
    @TypedParam("id") id: string
  ): string {
    console.info(headers, id);
    return "hello";
  }

  /**
   * @summary 검색 삭제 테스트
   * @tag app
   * @param {Base.headers} headers
   * @param {string} id
   * @return {*}  {string}
   * @memberof AppController
   */
  @Delete("/search/:id")
  deleteSearch(
    @TypedHeaders() headers: Base.headers,
    @TypedParam("id") id: string
  ): string {
    console.info(headers, id);
    return "hello";
  }
}
